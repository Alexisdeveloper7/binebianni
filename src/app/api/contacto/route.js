import { Resend } from "resend";

function limpiar(texto) {
  return String(texto || "")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .trim();
}

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(correo || "").trim());
}

export async function GET() {
  return Response.json({
    ok: true,
    mensaje: "API de contacto funcionando.",
  });
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = limpiar(process.env.CONTACT_EMAIL);

    if (!apiKey) {
      return Response.json(
        { ok: false, error: "Falta RESEND_API_KEY en .env.local" },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      return Response.json(
        { ok: false, error: "Falta CONTACT_EMAIL en .env.local" },
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

    const resend = new Resend(apiKey);
    const body = await request.json();

    const nombre = limpiar(body.nombre);
    const empresa = limpiar(body.empresa);
    const cargo = limpiar(body.cargo);
    const correo = limpiar(body.correo);
    const telefono = limpiar(body.telefono);
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

    const asunto = "Nueva solicitud de contacto";

    const html = `
      <div style="margin:0; padding:0; background:#eaf6ff; font-family:Arial, Helvetica, sans-serif; color:#07182A;">
        <div style="max-width:610px; margin:0 auto; padding:12px 8px;">
          <div style="background:#ffffff; border-radius:16px; overflow:hidden; border:1px solid #9bdcf8; box-shadow:0 12px 28px rgba(14,165,233,0.15);">

            <div style="background:#f8fcff; padding:14px 16px 13px; color:#07182A; border-bottom:3px solid #38bdf8;">
              <div style="display:inline-block; margin:0 0 6px; padding:3px 8px; border-radius:999px; background:#dff5ff; border:1px solid #38bdf8; color:#0F2A44; font-size:9px; font-weight:900; letter-spacing:1.3px; text-transform:uppercase;">
                Formulario de contacto
              </div>

              <h1 style="margin:0; color:#07182A; font-size:21px; line-height:1.15; font-weight:900; letter-spacing:-0.35px;">
                Nueva solicitud de contacto
              </h1>

              <p style="margin:6px 0 0; color:#24344b; font-size:12.5px; line-height:1.4; font-weight:800;">
                Se recibió una nueva solicitud desde la página web de Consultoría Social Bi Ne Bianni.
              </p>
            </div>

            <div style="padding:14px 16px 15px; background:#ffffff;">
              <div style="margin-bottom:8px; padding:7px 9px; background:#edf9ff; border:1px solid #9bdcf8; border-radius:11px;">
                <p style="margin:0; color:#07182A; font-size:9.5px; font-weight:900; text-transform:uppercase; letter-spacing:1.2px;">
                  Información recibida
                </p>
              </div>

              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; width:38%; vertical-align:top;">
                    Nombre
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${nombre}
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Empresa u organización
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${empresa}
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Cargo
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${cargo}
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Correo electrónico
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    <a href="mailto:${correo}" style="color:#075985; text-decoration:none; font-weight:900;">
                      ${correo}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Teléfono
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${telefono}
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Tipo de proyecto
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${tipoProyecto}
                  </td>
                </tr>

                <tr>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#30435D; font-size:11.5px; font-weight:900; vertical-align:top;">
                    Estado de la República
                  </td>
                  <td style="padding:5.5px 0; border-bottom:1px solid #d9e8f1; color:#07182A; font-size:12.5px; font-weight:800; vertical-align:top;">
                    ${estado}
                  </td>
                </tr>
              </table>

              <div style="margin-top:13px;">
                <p style="margin:0 0 6px; color:#07182A; font-size:9.5px; font-weight:900; text-transform:uppercase; letter-spacing:1.2px;">
                  Mensaje del contacto
                </p>

                <div style="background:#f8fcff; border:1px solid #9bdcf8; border-left:4px solid #0ea5e9; border-radius:12px; padding:10px 12px;">
                  <p style="margin:0; color:#111827; font-size:12.5px; line-height:1.42; font-weight:700; white-space:pre-line;">
                    ${mensaje}
                  </p>
                </div>
              </div>

              <div style="margin-top:12px; background:#e9fbff; border:1px solid #7dd3fc; border-radius:12px; padding:9px 11px;">
                <p style="margin:0; color:#07182A; font-size:11.5px; line-height:1.4; font-weight:900;">
                  Puedes responder directamente a este correo para dar seguimiento a la solicitud.
                </p>
              </div>
            </div>

            <div style="background:#edf9ff; padding:10px 16px; border-top:1px solid #9bdcf8;">
              <p style="margin:0; color:#24344b; font-size:10px; line-height:1.4; font-weight:700;">
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
Teléfono: ${telefono}
Tipo de proyecto: ${tipoProyecto}
Estado de la República: ${estado}

Mensaje del contacto:
${mensaje}

Puedes responder directamente a este correo para dar seguimiento a la solicitud.

Este mensaje fue enviado automáticamente desde el formulario de contacto de la página web de Consultoría Social Bi Ne Bianni.
    `.trim();

    const { error } = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: contactEmail,
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