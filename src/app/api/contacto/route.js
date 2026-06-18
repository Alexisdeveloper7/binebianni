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
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="color-scheme" content="dark light" />
    <meta name="supported-color-schemes" content="dark light" />
    <style>
      :root {
        color-scheme: dark light;
        supported-color-schemes: dark light;
      }

      html,
      body {
        margin: 0 !important;
        padding: 0 !important;
        background: #061827 !important;
        color: #f8fafc !important;
      }

      table,
      td,
      div,
      p,
      h1,
      span,
      a {
        color: #f8fafc !important;
      }

      a {
        color: #86cdfc !important;
      }

      .texto-principal {
        color: #f8fafc !important;
      }

      .texto-secundario {
        color: #d8eafe !important;
      }

      .texto-muted {
        color: #b8d4e8 !important;
      }

      .fondo-pagina {
        background: #061827 !important;
      }

      .fondo-card {
        background: #0f2a44 !important;
      }

      .fondo-bloque {
        background: #123452 !important;
      }

      .fondo-bloque-2 {
        background: #0b2238 !important;
      }

      @media (prefers-color-scheme: dark) {
        html,
        body,
        table,
        td,
        div {
          background-color: #061827 !important;
          color: #f8fafc !important;
        }

        p,
        h1,
        span,
        a {
          color: #f8fafc !important;
        }

        a {
          color: #86cdfc !important;
        }
      }

      @media (prefers-color-scheme: light) {
        html,
        body {
          background-color: #061827 !important;
          color: #f8fafc !important;
        }

        table,
        td,
        div,
        p,
        h1,
        span,
        a {
          color: #f8fafc !important;
        }

        a {
          color: #86cdfc !important;
        }
      }
    </style>
  </head>

  <body bgcolor="#061827" style="margin:0; padding:0; background:#061827 !important; color:#f8fafc !important; font-family:Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#061827" style="width:100%; margin:0; padding:0; background:#061827 !important; color:#f8fafc !important;">
      <tr>
        <td align="center" bgcolor="#061827" style="padding:16px 10px; background:#061827 !important; color:#f8fafc !important;">

          <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" bgcolor="#0f2a44" style="width:100%; max-width:640px; background:#0f2a44 !important; border:1px solid #2f6685; border-radius:16px; overflow:hidden; color:#f8fafc !important;">
            
            <tr>
              <td bgcolor="#0b2238" style="padding:18px 18px 16px; background:#0b2238 !important; border-bottom:1px solid #2f6685; color:#f8fafc !important;">
                
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 9px;">
                  <tr>
                    <td bgcolor="#123452" style="background:#123452 !important; border:1px solid #3c7ea3; border-radius:999px; padding:5px 10px; color:#dff4ff !important;">
                      <span style="display:block; color:#dff4ff !important; font-size:10px; font-weight:900; letter-spacing:1.5px; text-transform:uppercase;">
                        Formulario de contacto
                      </span>
                    </td>
                  </tr>
                </table>

                <h1 style="margin:0; color:#ffffff !important; font-size:24px; line-height:1.15; font-weight:900; letter-spacing:-0.4px;">
                  Nueva solicitud de contacto
                </h1>

                <p style="margin:8px 0 0; color:#d8eafe !important; font-size:13px; line-height:1.5; font-weight:700;">
                  Se recibió una nueva solicitud desde la página web de Consultoría Social Bi Ne Bianni.
                </p>

              </td>
            </tr>

            <tr>
              <td bgcolor="#0f2a44" style="padding:16px 18px 18px; background:#0f2a44 !important; color:#f8fafc !important;">

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#123452" style="width:100%; background:#123452 !important; border:1px solid #3c7ea3; border-radius:12px; margin-bottom:10px;">
                  <tr>
                    <td style="padding:9px 11px; color:#f8fafc !important;">
                      <p style="margin:0; color:#ffffff !important; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:1.3px;">
                        Información recibida
                      </p>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; border-collapse:collapse; color:#f8fafc !important;">
                  
                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Nombre
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      ${nombreHtml}
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Empresa u organización
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      ${empresaHtml}
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Cargo
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      ${cargoHtml}
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Correo electrónico
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      <a href="mailto:${correoHtml}" style="color:#86cdfc !important; text-decoration:none; font-weight:900; word-break:break-word;">
                        ${correoHtml}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Teléfono
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top;">
                      +52 ${telefonoHtml}
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Tipo de proyecto
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      ${tipoProyectoHtml}
                    </td>
                  </tr>

                  <tr>
                    <td width="38%" style="padding:8px 0; border-bottom:1px solid #2f6685; color:#b8d4e8 !important; font-size:12px; font-weight:900; vertical-align:top;">
                      Estado de la República
                    </td>
                    <td style="padding:8px 0; border-bottom:1px solid #2f6685; color:#ffffff !important; font-size:13px; font-weight:800; vertical-align:top; word-break:break-word;">
                      ${estadoHtml}
                    </td>
                  </tr>

                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; margin-top:15px;">
                  <tr>
                    <td style="padding:0; color:#f8fafc !important;">
                      <p style="margin:0 0 7px; color:#ffffff !important; font-size:10px; font-weight:900; text-transform:uppercase; letter-spacing:1.3px;">
                        Mensaje del contacto
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td bgcolor="#0b2238" style="background:#0b2238 !important; border:1px solid #3c7ea3; border-left:4px solid #86cdfc; border-radius:13px; padding:12px 13px; color:#ffffff !important;">
                      <p style="margin:0; color:#ffffff !important; font-size:13px; line-height:1.5; font-weight:700; white-space:pre-line; word-break:break-word;">
                        ${mensajeHtml}
                      </p>
                    </td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#123452" style="width:100%; margin-top:14px; background:#123452 !important; border:1px solid #3c7ea3; border-radius:13px;">
                  <tr>
                    <td style="padding:10px 12px; color:#ffffff !important;">
                      <p style="margin:0; color:#ffffff !important; font-size:12px; line-height:1.45; font-weight:900;">
                        Puedes responder directamente a este correo para dar seguimiento a la solicitud.
                      </p>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <tr>
              <td bgcolor="#0b2238" style="background:#0b2238 !important; padding:11px 18px; border-top:1px solid #2f6685; color:#d8eafe !important;">
                <p style="margin:0; color:#d8eafe !important; font-size:10.5px; line-height:1.45; font-weight:700;">
                  Este mensaje fue enviado automáticamente desde el formulario de contacto de la página web de Consultoría Social Bi Ne Bianni.
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
</html>
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