import { Resend } from "resend";

function limpiar(texto) {
  return String(texto || "").trim();
}

function limpiarHtml(texto) {
  return String(texto || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .trim();
}

function limpiarTelefono(telefono) {
  return String(telefono || "")
    .replace(/\D/g, "")
    .slice(0, 10);
}

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(correo || "").trim());
}

export async function GET() {
  return Response.json({
    ok: true,
    mensaje: "API de contacto funcionando correctamente.",
  });
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = limpiar(process.env.CONTACT_EMAIL);
    const fromEmail =
      limpiar(process.env.RESEND_FROM_EMAIL) ||
      "Formulario Web <onboarding@resend.dev>";

    if (!apiKey) {
      return Response.json(
        {
          ok: false,
          error: "Falta RESEND_API_KEY en .env.local",
        },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      return Response.json(
        {
          ok: false,
          error: "Falta CONTACT_EMAIL en .env.local",
        },
        { status: 500 }
      );
    }

    if (!validarCorreo(contactEmail)) {
      return Response.json(
        {
          ok: false,
          error: "CONTACT_EMAIL no tiene un formato válido.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const nombre = limpiar(body.nombre);
    const empresa = limpiar(body.empresa);
    const cargo = limpiar(body.cargo);
    const correo = limpiar(body.correo);
    const telefono = limpiarTelefono(body.telefono);
    const tipoProyecto = limpiar(body.tipoProyecto);
    const estado = limpiar(body.estado);
    const mensaje = limpiar(body.mensaje);

    if (
      !nombre ||
      !empresa ||
      !cargo ||
      !correo ||
      !telefono ||
      !tipoProyecto ||
      !estado ||
      !mensaje
    ) {
      return Response.json(
        {
          ok: false,
          error: "Todos los campos son obligatorios.",
        },
        { status: 400 }
      );
    }

    if (!validarCorreo(correo)) {
      return Response.json(
        {
          ok: false,
          error:
            "Correo electrónico inválido. Usa un formato como nombre@empresa.com",
        },
        { status: 400 }
      );
    }

    if (telefono.length !== 10) {
      return Response.json(
        {
          ok: false,
          error: "El teléfono debe tener exactamente 10 dígitos.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const nombreHtml = limpiarHtml(nombre);
    const empresaHtml = limpiarHtml(empresa);
    const cargoHtml = limpiarHtml(cargo);
    const correoHtml = limpiarHtml(correo);
    const telefonoHtml = limpiarHtml(telefono);
    const tipoProyectoHtml = limpiarHtml(tipoProyecto);
    const estadoHtml = limpiarHtml(estado);
    const mensajeHtml = limpiarHtml(mensaje);

    const asunto = `Nueva solicitud de contacto - ${nombre}`;

    const html = `
      <div style="margin:0; padding:0; background:#eaf6ff; font-family:Arial, Helvetica, sans-serif; color:#07182A;">
        <div style="max-width:640px; margin:0 auto; padding:16px 10px;">
          <div style="background:#ffffff; border-radius:18px; overflow:hidden; border:1px solid #9bdcf8; box-shadow:0 14px 34px rgba(14,165,233,0.18);">

            <div style="background:linear-gradient(135deg,#07182A,#0F2A44,#1E4D6E); padding:18px 18px 16px; color:white;">
              <div style="display:inline-block; margin:0 0 8px; padding:4px 10px; border-radius:999px; background:rgba(255,255,255,0.12); border:1px solid rgba(125,211,252,0.45); color:#cffafe; font-size:10px; font-weight:900; letter-spacing:1.5px; text-transform:uppercase;">
                Formulario de contacto
              </div>

              <h1 style="margin:0; color:white; font-size:24px; line-height:1.15; font-weight:900; letter-spacing:-0.4px;">
                Nueva solicitud de contacto
              </h1>

              <p style="margin:8px 0 0; color:#e0f2fe; font-size:13px; line-height:1.5; font-weight:700;">
                Se recibió una nueva solicitud desde la página web de Consultoría Social Bi Ne Bianni.
              </p>
            </div>

            <div style="padding:16px 18px 18px; background:#ffffff;">
              <div style="margin-bottom:10px; padding:9px 11px; background:#edf9ff; border:1px solid #9bdcf8; border-radius:12px;">
                <p style="margin:0; color:#07182A; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:1.3px;">
                  Información recibida
                </p>
              </div>

              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; width:38%; vertical-align:top;">
                    Nombre
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    ${nombreHtml}
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Empresa u organización
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    ${empresaHtml}
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Cargo
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    ${cargoHtml}
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Correo electrónico
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    <a href="mailto:${correoHtml}" style="color:#075985; text-decoration:none; font-weight:900;">
                      ${correoHtml}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Teléfono
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    +52 ${telefonoHtml}
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Tipo de proyecto
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    ${tipoProyectoHtml}
                  </td>
                </tr>

                <tr>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:12px; font-weight:900; vertical-align:top;">
                    Estado de la República
                  </td>
                  <td style="padding:7px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:13px; font-weight:800; vertical-align:top;">
                    ${estadoHtml}
                  </td>
                </tr>
              </table>

              <div style="margin-top:15px;">
                <p style="margin:0 0 7px; color:#07182A; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:1.3px;">
                  Mensaje del contacto
                </p>

                <div style="background:#f8fcff; border:1px solid #9bdcf8; border-left:4px solid #0ea5e9; border-radius:13px; padding:12px 13px;">
                  <p style="margin:0; color:#111827; font-size:13px; line-height:1.5; font-weight:700; white-space:pre-line;">
                    ${mensajeHtml}
                  </p>
                </div>
              </div>

              <div style="margin-top:14px; background:#e9fbff; border:1px solid #7dd3fc; border-radius:13px; padding:10px 12px;">
                <p style="margin:0; color:#07182A; font-size:12px; line-height:1.45; font-weight:900;">
                  Puedes responder directamente a este correo para dar seguimiento a la solicitud.
                </p>
              </div>
            </div>

            <div style="background:#edf9ff; padding:11px 18px; border-top:1px solid #9bdcf8;">
              <p style="margin:0; color:#24344b; font-size:10.5px; line-height:1.45; font-weight:700;">
                Este mensaje fue enviado automáticamente desde el formulario de contacto de la página web de Consultoría Social Bi Ne Bianni.
              </p>
            </div>

          </div>
        </div>
      </div>
    `;

    const text = `
Nueva solicitud de contacto

Se recibió una nueva solicitud desde la página web de Consultoría Social Bi Ne Bianni.

Información recibida:

Nombre: ${nombre}
Empresa u organización: ${empresa}
Cargo: ${cargo}
Correo electrónico: ${correo}
Teléfono: +52 ${telefono}
Tipo de proyecto: ${tipoProyecto}
Estado de la República: ${estado}

Mensaje del contacto:
${mensaje}

Puedes responder directamente a este correo para dar seguimiento a la solicitud.

Este mensaje fue enviado automáticamente desde el formulario de contacto de la página web de Consultoría Social Bi Ne Bianni.
    `.trim();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: asunto,
      replyTo: correo,
      html,
      text,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return Response.json(
        {
          ok: false,
          error: error.message || "No se pudo enviar el mensaje.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      mensaje: "Solicitud enviada correctamente.",
      id: data?.id || null,
    });
  } catch (error) {
    console.error("Error al enviar contacto:", error);

    return Response.json(
      {
        ok: false,
        error: error.message || "No se pudo enviar el mensaje.",
      },
      { status: 500 }
    );
  }
}