"use client";

const indicadores = [
  {
    numero: "+15 años",
    texto: "de experiencia acumulada",
  },
  {
    numero: "+200 proyectos",
    texto: "desarrollados",
  },
  {
    numero: "10 estados",
    texto: "de la República Mexicana",
  },
  {
    numero: "Gestión Social",
    texto: "como eje estratégico",
  },
];

const valores = [
  {
    titulo: "Integridad",
    texto: "Actuamos con ética, transparencia y responsabilidad.",
  },
  {
    titulo: "Respeto",
    texto: "Reconocemos la diversidad cultural y social de los territorios.",
  },
  {
    titulo: "Diálogo",
    texto: "Promovemos procesos participativos y constructivos.",
  },
  {
    titulo: "Compromiso",
    texto: "Trabajamos orientados a resultados sostenibles.",
  },
  {
    titulo: "Innovación Social",
    texto: "Desarrollamos soluciones adaptadas a cada contexto.",
  },
  {
    titulo: "Sostenibilidad",
    texto: "Generamos valor compartido para las organizaciones y las comunidades.",
  },
];

const servicios = [
  {
    titulo: "Manifestación de Impacto Social para el Sector Energético (MISSE)",
    texto: "Elaboración de estudios sociales para identificar impactos, riesgos y oportunidades asociados al desarrollo de proyectos.",
  },
  {
    titulo: "Planes de Gestión Social (PGS)",
    texto: "Diseño e implementación de estrategias orientadas a gestionar impactos sociales y fortalecer la sostenibilidad de los proyectos.",
  },
  {
    titulo: "Consulta Indígena y Participación Social",
    texto: "Acompañamiento técnico en procesos participativos con enfoque intercultural y respeto a los derechos colectivos.",
  },
  {
    titulo: "Relacionamiento Comunitario",
    texto: "Diseño de estrategias para fortalecer el diálogo y la construcción de confianza con comunidades y grupos de interés.",
  },
  {
    titulo: "Mapeo de Actores",
    texto: "Identificación, caracterización y análisis de actores clave para la gestión territorial.",
  },
  {
    titulo: "Mecanismos de Quejas y Atención Comunitaria",
    texto: "Diseño e implementación de sistemas de atención, seguimiento y resolución de inquietudes comunitarias.",
  },
  {
    titulo: "Estudios Territoriales",
    texto: "Análisis social, económico y cultural para apoyar la toma de decisiones estratégicas.",
  },
  {
    titulo: "ESG y Sostenibilidad",
    texto: "Integración de criterios ambientales, sociales y de gobernanza en proyectos y organizaciones.",
  },
  {
    titulo: "Monitoreo Social",
    texto: "Seguimiento de indicadores y desempeño social para evaluar resultados e impactos.",
  },
  {
    titulo: "Inversión Social Estratégica",
    texto: "Diseño e implementación de programas orientados a generar valor compartido y fortalecer el desarrollo comunitario.",
  },
];

export default function Home() {
  const irAContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Bi Ne Bianni"
              className="h-10 w-auto max-w-[150px] object-contain md:h-12 md:max-w-[190px]"
            />

            
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#inicio" className="hover:text-[#30435D]">
              Inicio
            </a>
            <a href="#nosotros" className="hover:text-[#30435D]">
              Nosotros
            </a>
            <a href="#servicios" className="hover:text-[#30435D]">
              Servicios
            </a>
            <a href="#experiencia" className="hover:text-[#30435D]">
              Experiencia
            </a>
            <a href="#contacto" className="hover:text-[#30435D]">
              Contacto
            </a>
          </nav>

          <button
            type="button"
            onClick={irAContacto}
            className="shrink-0 rounded-full bg-[#30435D] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white md:px-5 md:py-3"
          >
            Solicitar consulta
          </button>
        </div>
      </header>

      <section
        id="inicio"
        className="scroll-mt-20 relative overflow-hidden bg-[#f7fbff] px-4 py-7 md:scroll-mt-24 md:px-8 md:py-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(134,205,252,0.45)_0%,rgba(247,251,255,0.75)_28%,#ffffff_55%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D] md:text-sm">
              Construimos confianza.
              <br />
              Generamos sostenibilidad.
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#30435D] md:text-7xl">
              Gestión social estratégica
            </h1>

            <div className="mt-5 space-y-4 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
              <p>
                Consultoría Social Bi Ne Bianni impulsa la sostenibilidad social
                de diversos proyectos mediante estrategias integrales de gestión
                social, relacionamiento comunitario y creación de valor
                compartido.
              </p>

              <p>
                Respaldados por una trayectoria profesional que se remonta a
                2010, acompañamos a empresas e instituciones en la
                identificación de oportunidades, la gestión de riesgos sociales y
                el fortalecimiento de vínculos con comunidades y grupos de
                interés.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:flex">
              <a
                href="#experiencia"
                className="rounded-full bg-[#30435D] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white"
              >
                Conoce nuestra experiencia
              </a>

              <button
                type="button"
                onClick={irAContacto}
                className="rounded-full border border-[#30435D] bg-white px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-[#30435D]"
              >
                Agenda una consulta
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white bg-white/80 p-4 shadow-xl shadow-slate-200 md:p-6">
            <div className="rounded-[1.35rem] bg-[#30435D] p-6 text-white md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#86CDFC]">
                Consultoría especializada
              </p>

              <h2 className="mt-4 text-2xl font-black md:text-3xl">
                Gestión social, sostenibilidad y desarrollo comunitario
              </h2>

              <div className="mt-6 grid gap-3">
                {[
                  "Trabajo comunitario",
                  "Gestión territorial",
                  "Relacionamiento social",
                  "Valor compartido",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="scroll-mt-20 px-4 py-10 md:scroll-mt-24 md:px-8 md:py-16"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {indicadores.map((item) => (
            <div
              key={item.numero}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:rounded-3xl md:p-6"
            >
              <p className="text-2xl font-black text-[#30435D] md:text-3xl">
                {item.numero}
              </p>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 md:text-sm">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="nosotros"
        className="scroll-mt-20 bg-[#30435D] px-4 py-12 text-white md:scroll-mt-24 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#86CDFC] md:text-sm">
              Quiénes somos
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Construimos relaciones que generan valor compartido
            </h2>
          </div>

          <div className="space-y-4 text-base leading-7 text-slate-100 md:text-lg md:leading-8">
            <p>
              Consultoría Social Bi Ne Bianni es una firma mexicana
              especializada en gestión social, sostenibilidad y desarrollo
              territorial.
            </p>

            <p>
              Constituida formalmente en 2025 y respaldada por una trayectoria
              profesional que se remonta a 2010, nuestra firma acompaña a
              empresas, desarrolladores e instituciones en el diseño e
              implementación de estrategias que fortalecen la relación entre
              proyectos, comunidades y actores clave.
            </p>

            <p>
              Nuestra experiencia combina conocimiento técnico, comprensión
              territorial y una visión estratégica que permite identificar
              oportunidades, gestionar riesgos sociales y construir relaciones de
              confianza que favorecen la sostenibilidad de largo plazo.
            </p>

            <p>
              A lo largo de nuestra trayectoria hemos participado en más de 200
              proyectos desarrollados en 10 estados de la República Mexicana.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[#B5CDDF]/35 p-5 md:rounded-[2rem] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
              Nuestra visión
            </p>
            <p className="mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
              Ser una firma referente en México en gestión social,
              sostenibilidad y desarrollo territorial, reconocida por generar
              soluciones innovadoras que fortalezcan la relación entre
              organizaciones, comunidades y territorios.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#86CDFC]/25 p-5 md:rounded-[2rem] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
              Nuestra misión
            </p>
            <p className="mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
              Impulsar la sostenibilidad social de proyectos mediante
              soluciones integrales de gestión social, relacionamiento
              comunitario y creación de valor compartido que contribuyan al
              desarrollo responsable de los territorios.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Nuestros valores
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#30435D] md:text-5xl">
            Principios que guían nuestro trabajo
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <article
                key={valor.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-3xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#86CDFC]/35 font-black text-[#30435D]">
                  ✓
                </div>

                <h3 className="text-lg font-black text-[#30435D]">
                  {valor.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {valor.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-20 px-4 py-12 md:scroll-mt-24 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Servicios
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#30435D] md:text-5xl">
            Soluciones integrales de gestión social
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicios.map((servicio) => (
              <article
                key={servicio.titulo}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-6"
              >
                <h3 className="text-lg font-black text-[#30435D]">
                  {servicio.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  {servicio.texto}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Clientes
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#30435D] md:text-5xl">
            Organizaciones que han confiado en nuestro trabajo
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Kino Energía", "Zuma Energía"].map((cliente) => (
              <div
                key={cliente}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-xl font-black text-[#30435D] shadow-sm md:p-8 md:text-2xl"
              >
                {cliente}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Espacio para incorporar clientes adicionales autorizados.
          </p>
        </div>
      </section>

      <section
        id="contacto"
        className="scroll-mt-20 px-4 py-12 md:scroll-mt-24 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-7 rounded-[1.5rem] bg-[#30435D] p-5 text-white md:rounded-[2rem] md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#86CDFC]">
              Contacto
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-4 leading-7 text-slate-100 md:text-lg md:leading-8">
              Cuéntanos sobre tu organización, el tipo de proyecto y el
              territorio donde buscas fortalecer tu estrategia social.
            </p>
          </div>

          <form className="grid gap-3">
            {[
              "Nombre",
              "Empresa",
              "Cargo",
              "Correo electrónico",
              "Teléfono",
              "Tipo de proyecto",
              "Estado de la República",
            ].map((campo) => (
              <input
                key={campo}
                placeholder={campo}
                className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none"
              />
            ))}

            <textarea
              placeholder="Mensaje"
              rows={4}
              className="resize-none rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none"
            />

            <button
              type="button"
              className="rounded-full bg-[#86CDFC] px-6 py-3.5 text-xs font-black uppercase tracking-wide text-[#30435D]"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#1f2d40] px-4 py-8 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-base font-black uppercase tracking-[0.16em]">
              Consultoría Social Bi Ne Bianni
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
              Gestión social, sostenibilidad y desarrollo territorial.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="text-sm leading-7 text-slate-300 md:col-span-2">
            <p>binebianni@gmail.com</p>
            <p>971 123 4567</p>
          </div>
        </div>
      </footer>
    </main>
  );
}