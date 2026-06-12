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
      <div style="margin:0; padding:0; background:#f3f7fb; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
        <div style="max-width:700px; margin:0 auto; padding:32px 16px;">
          <div style="background:#ffffff; border-radius:24px; overflow:hidden; border:1px solid #e5e7eb; box-shadow:0 18px 45px rgba(15, 23, 42, 0.10);">
            
            <div style="background:#30435D; padding:32px 30px; color:#ffffff;">
              <p style="margin:0 0 10px; color:#86CDFC; font-size:12px; font-weight:800; letter-spacing:2px; text-transform:uppercase;">
                Formulario de contacto
              </p>

              <h1 style="margin:0; font-size:28px; line-height:1.2; font-weight:900;">
                Nueva solicitud de contacto
              </h1>

              <p style="margin:14px 0 0; color:#dbeafe; font-size:15px; line-height:1.7;">
                Se recibió una nueva solicitud desde la página web de Consultoría Social Bi Ne Bianni.
                A continuación se muestran los datos proporcionados por la persona interesada.
              </p>
            </div>

            <div style="padding:30px;">
              <div style="margin-bottom:22px;">
                <p style="margin:0; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px;">
                  Información recibida
                </p>
              </div>

              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700; width:38%;">
                    Nombre
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${nombre}
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Empresa u organización
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${empresa}
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Cargo
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${cargo}
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Correo electrónico
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    <a href="mailto:${correo}" style="color:#30435D; text-decoration:none; font-weight:800;">
                      ${correo}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Teléfono
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${telefono}
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Tipo de proyecto
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${tipoProyecto}
                  </td>
                </tr>

                <tr>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#64748b; font-size:14px; font-weight:700;">
                    Estado de la República
                  </td>
                  <td style="padding:13px 0; border-bottom:1px solid #e5e7eb; color:#111827; font-size:15px; font-weight:700;">
                    ${estado}
                  </td>
                </tr>
              </table>

              <div style="margin-top:30px;">
                <p style="margin:0 0 10px; color:#64748b; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1.5px;">
                  Mensaje del solicitante
                </p>

                <div style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:18px; padding:18px 20px;">
                  <p style="margin:0; color:#1f2937; font-size:15px; line-height:1.7; white-space:pre-line;">
                    ${mensaje}
                  </p>
                </div>
              </div>

              <div style="margin-top:28px; background:#eef7ff; border:1px solid #cfeaff; border-radius:18px; padding:16px 18px;">
                <p style="margin:0; color:#30435D; font-size:14px; line-height:1.6; font-weight:700;">
                  Puedes responder directamente a este correo para dar seguimiento a la solicitud.
                </p>
              </div>
            </div>

            <div style="background:#1f2d40; padding:18px 30px;">
              <p style="margin:0; color:#cbd5e1; font-size:12px; line-height:1.6;">
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

Mensaje del solicitante:
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