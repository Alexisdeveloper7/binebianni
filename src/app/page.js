"use client";

import Contacto from "@/components/Contacto";

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
  const irASeccion = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-800 selection:bg-[#86CDFC]/35 selection:text-[#172338]">
      <section
        id="inicio"
        className="scroll-mt-20 relative overflow-hidden bg-[#f7fbff] px-4 pt-7 pb-8 md:scroll-mt-24 md:px-8 md:pt-20 md:pb-8 lg:pt-24 lg:pb-10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(134,205,252,0.45)_0%,rgba(247,251,255,0.75)_28%,#ffffff_55%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D] drop-shadow-sm md:text-sm">
              Construimos confianza.
              <br />
              Generamos sostenibilidad.
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-[#24344b] md:text-7xl">
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
              <button
                type="button"
                onClick={() => irASeccion("experiencia")}
                className="touch-manipulation cursor-pointer rounded-full bg-gradient-to-r from-[#24344b] via-[#30435D] to-[#1f2d40] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-[#30435D]/25 outline-none ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#30435D]/35 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] active:shadow-md active:shadow-[#30435D]/25"
              >
                Conoce nuestra experiencia
              </button>

              <button
                type="button"
                onClick={() => irASeccion("contacto")}
                className="touch-manipulation cursor-pointer rounded-full border border-[#30435D]/25 bg-white/80 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-[#30435D] shadow-sm shadow-slate-200/80 outline-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC] hover:bg-[#30435D] hover:text-white hover:shadow-lg hover:shadow-[#30435D]/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] active:border-[#86CDFC] active:bg-[#eef8ff] active:text-[#30435D] active:shadow-md"
              >
                Agenda una consulta
              </button>
            </div>
          </div>

          <div className="touch-manipulation rounded-[1.75rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-[#30435D]/10 ring-1 ring-[#86CDFC]/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#30435D]/15 active:scale-[0.99] active:border-[#86CDFC]/50 active:shadow-xl md:p-6">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#1f2d40] via-[#30435D] to-[#182536] p-6 text-white shadow-inner md:p-8">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#86CDFC]/20 blur-2xl" />
              <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

              <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-[#9edaff]">
                Consultoría especializada
              </p>

              <h2 className="relative mt-4 text-2xl font-black md:text-3xl">
                Gestión social, sostenibilidad y desarrollo comunitario
              </h2>

              <div className="relative mt-6 grid gap-3">
                {[
                  "Trabajo comunitario",
                  "Gestión territorial",
                  "Relacionamiento social",
                  "Valor compartido",
                ].map((item) => (
                  <div
                    key={item}
                    className="touch-manipulation rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold shadow-sm shadow-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC]/45 hover:bg-white/15 active:scale-[0.99] active:border-[#86CDFC]/45 active:bg-white/15"
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
        className="scroll-mt-20 px-4 pt-2 pb-10 md:scroll-mt-24 md:px-8 md:pt-4 md:pb-16 lg:pt-5 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="touch-manipulation mb-4 rounded-2xl border border-[#d8e8f7] bg-gradient-to-br from-white via-[#f7fbff] to-[#eef8ff] p-4 shadow-lg shadow-[#30435D]/5 transition-all duration-300 active:scale-[0.995] active:border-[#86CDFC]/60 active:shadow-md md:mb-6 md:rounded-[1.5rem] md:p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#30435D] md:text-xs">
              Experiencia
            </p>

            <div className="mt-2 grid gap-2 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <h2 className="text-2xl font-black leading-tight tracking-tight text-[#24344b] md:text-4xl">
                Trayectoria comprobada en gestión social
              </h2>

              <p className="max-w-3xl text-xs font-semibold leading-5 text-slate-600 md:text-sm md:leading-6">
                Acompañamos proyectos con una visión estratégica, territorial y
                sostenible, fortaleciendo la relación entre organizaciones,
                comunidades y actores clave.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {indicadores.map((item) => (
              <div
                key={item.numero}
                className="touch-manipulation min-w-0 rounded-2xl border border-[#dbe8f3] bg-white/90 p-4 shadow-lg shadow-[#30435D]/5 ring-1 ring-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 hover:shadow-xl hover:shadow-[#86CDFC]/20 active:scale-[0.98] active:border-[#86CDFC]/80 active:bg-[#f7fbff] active:shadow-md md:rounded-3xl md:p-6"
              >
                <p className="max-w-full whitespace-normal text-[clamp(1.15rem,4.4vw,1.5rem)] font-black leading-tight tracking-tight text-[#24344b] lg:text-3xl">
                  {item.numero}
                </p>

                <p className="mt-2 max-w-full whitespace-normal text-xs font-semibold leading-5 text-slate-600 md:text-sm">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="nosotros"
        className="scroll-mt-20 bg-gradient-to-br from-[#1f2d40] via-[#30435D] to-[#172338] px-4 py-12 text-white md:scroll-mt-24 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9edaff] md:text-sm">
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

      <section className="px-4 py-12 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          <div className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#d8e8f7] bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf7ff] p-5 shadow-xl shadow-[#30435D]/7 ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 hover:shadow-2xl hover:shadow-[#86CDFC]/20 active:scale-[0.99] active:border-[#86CDFC]/80 active:shadow-lg md:rounded-[2rem] md:p-8">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#86CDFC]/25 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/35 group-active:bg-[#86CDFC]/35" />
            <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-[#30435D]/10 blur-2xl" />

            <div className="relative flex items-center justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
                Nuestra visión
              </p>
            </div>

            <div className="relative mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#30435D] to-[#1f2d40] text-sm font-black text-white shadow-lg shadow-[#30435D]/20 transition-all duration-300 group-active:scale-95">
              ✦
            </div>

            <p className="relative mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
              Ser una firma referente en México en gestión social,
              sostenibilidad y desarrollo territorial, reconocida por generar
              soluciones innovadoras que fortalezcan la relación entre
              organizaciones, comunidades y territorios.
            </p>
          </div>

          <div className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#c8eaff] bg-gradient-to-br from-[#e9f8ff] via-white to-[#f3fbff] p-5 shadow-xl shadow-[#86CDFC]/12 ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:shadow-2xl hover:shadow-[#86CDFC]/25 active:scale-[0.99] active:border-[#86CDFC]/90 active:shadow-lg md:rounded-[2rem] md:p-8">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#86CDFC]/30 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/45 group-active:bg-[#86CDFC]/45" />
            <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-[#30435D]/10 blur-2xl" />

            <div className="relative flex items-center justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
                Nuestra misión
              </p>
            </div>

            <div className="relative mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#86CDFC] to-[#4ab3f0] text-sm font-black text-[#1f2d40] shadow-lg shadow-[#86CDFC]/30 transition-all duration-300 group-active:scale-95">
              ✓
            </div>

            <p className="relative mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
              Impulsar la sostenibilidad social de proyectos mediante
              soluciones integrales de gestión social, relacionamiento
              comunitario y creación de valor compartido que contribuyan al
              desarrollo responsable de los territorios.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f7fbff] via-[#f3f8fd] to-white px-4 py-7 md:px-8 md:py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Nuestros valores
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#24344b] md:text-5xl">
            Principios que guían nuestro trabajo
          </h2>

          <div className="mt-4 grid gap-1.5 md:mt-7 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {valores.map((valor) => (
              <article
                key={valor.titulo}
                className="group touch-manipulation flex items-start gap-2 rounded-xl border border-[#dbe8f3] bg-white/90 px-3 py-2 shadow-lg shadow-[#30435D]/5 ring-1 ring-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 hover:shadow-xl hover:shadow-[#86CDFC]/20 active:scale-[0.98] active:border-[#86CDFC]/80 active:bg-[#f7fbff] active:shadow-md md:block md:rounded-3xl md:p-5"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#86CDFC]/50 to-[#B5CDDF]/45 text-[10px] font-black text-[#30435D] shadow-sm shadow-[#86CDFC]/20 transition-all duration-300 group-hover:bg-[#86CDFC]/50 group-active:scale-95 group-active:bg-[#86CDFC]/60 md:mb-4 md:h-11 md:w-11 md:rounded-2xl md:text-base">
                  ✓
                </div>

                <div>
                  <h3 className="text-sm font-black leading-none text-[#24344b] md:text-lg md:leading-tight">
                    {valor.titulo}
                  </h3>

                  <p className="mt-1 text-[11px] leading-4 text-slate-600 md:mt-2 md:text-sm md:leading-6">
                    {valor.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="scroll-mt-20 px-4 py-7 md:scroll-mt-24 md:px-8 md:py-"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Servicios
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#24344b] md:text-5xl">
            Soluciones integrales de gestión social
          </h2>

          <div className="mt-5 grid gap-2 md:mt-7 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {servicios.map((servicio, index) => (
              <article
                key={servicio.titulo}
                className="group touch-manipulation rounded-2xl border border-[#dbe8f3] bg-white/95 p-3 shadow-lg shadow-[#30435D]/5 ring-1 ring-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 hover:shadow-xl hover:shadow-[#86CDFC]/20 active:scale-[0.98] active:border-[#86CDFC]/80 active:bg-[#f7fbff] active:shadow-md md:rounded-[1.5rem] md:p-6 lg:last:col-start-2"
              >
                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#86CDFC]/55 to-[#B5CDDF]/45 text-[11px] font-black text-[#30435D] shadow-sm shadow-[#86CDFC]/20 transition-all duration-300 group-hover:shadow-md group-hover:shadow-[#86CDFC]/25 group-active:scale-95 group-active:shadow-md group-active:shadow-[#86CDFC]/30 md:h-10 md:w-10 md:rounded-2xl md:text-sm">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-[13px] font-black leading-snug text-[#24344b] md:text-lg md:leading-tight">
                      {servicio.titulo}
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-slate-600 md:mt-3 md:text-base md:leading-7">
                      {servicio.texto}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fbff] via-white to-[#eef8ff] px-4 py-1 md:px-8 md:py-5">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#86CDFC]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-[#30435D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Clientes
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#24344b] md:text-5xl">
            Organizaciones que han confiado en nuestro trabajo
          </h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Kino Energía", "Zuma Energía"].map((cliente) => (
              <div
                key={cliente}
                className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#dbe8f3] bg-white/90 p-6 text-xl font-black text-[#24344b] shadow-xl shadow-[#30435D]/7 ring-1 ring-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:shadow-2xl hover:shadow-[#86CDFC]/20 active:scale-[0.99] active:border-[#86CDFC]/90 active:bg-[#f7fbff] active:shadow-lg md:p-8 md:text-2xl"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#86CDFC]/25 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/40 group-active:bg-[#86CDFC]/40" />

                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86CDFC]">
                    Cliente estratégico
                  </p>

                  <p className="mt-1">{cliente}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-500">
            Espacio para incorporar clientes adicionales autorizados.
          </p>
        </div>
      </section>

      <Contacto />
    </main>
  );
}