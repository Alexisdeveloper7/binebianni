const servicios = [
  {
    titulo: "Manifestación de Impacto Social para el Sector Energético (MISSE)",
    texto: "Elaboración de estudios sociales para identificar impactos, riesgos y oportunidades asociados al desarrollo de proyectos.",
    imagen: "/images/servicios/ser1.png",
    posicion: "arriba",
  },
  {
    titulo: "Planes de Gestión Social (PGS)",
    texto: "Diseño e implementación de estrategias orientadas a gestionar impactos sociales y fortalecer la sostenibilidad de los proyectos.",
    imagen: "/images/servicios/ser2.png",
    posicion: "abajo",
  },
  {
    titulo: "Consulta Indígena y Participación Social",
    texto: "Acompañamiento técnico en procesos participativos con enfoque intercultural y respeto a los derechos colectivos.",
    imagen: "/images/servicios/ser3.png",
    posicion: "arriba",
  },
  {
    titulo: "Relacionamiento Comunitario",
    texto: "Diseño de estrategias para fortalecer el diálogo y la construcción de confianza con comunidades y grupos de interés.",
    imagen: "/images/servicios/ser4.png",
    posicion: "arriba",
  },
  {
    titulo: "Mapeo de Actores",
    texto: "Identificación, caracterización y análisis de actores clave para la gestión territorial.",
    imagen: "/images/servicios/ser5.png",
    posicion: "abajo",
  },
  {
    titulo: "Mecanismos de Quejas y Atención Comunitaria",
    texto: "Diseño e implementación de sistemas de atención, seguimiento y resolución de inquietudes comunitarias.",
    imagen: "/images/servicios/ser6.png",
    posicion: "abajo",
  },
  {
    titulo: "Estudios Territoriales",
    texto: "Análisis social, económico y cultural para apoyar la toma de decisiones estratégicas.",
    imagen: "/images/servicios/ser7.png",
    posicion: "arriba",
  },
  {
    titulo: "ESG y Sostenibilidad",
    texto: "Integración de criterios ambientales, sociales y de gobernanza en proyectos y organizaciones.",
    imagen: "/images/servicios/ser8.png",
    posicion: "arriba",
  },
  {
    titulo: "Monitoreo Social",
    texto: "Seguimiento de indicadores y desempeño social para evaluar resultados e impactos.",
    imagen: "/images/servicios/ser9.png",
    posicion: "abajo",
  },
  {
    titulo: "Inversión Social Estratégica",
    texto: "Diseño e implementación de programas orientados a generar valor compartido y fortalecer el desarrollo comunitario.",
    imagen: "/images/servicios/ser10.png",
    posicion: "arriba",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative -mt-px -mb-px scroll-mt-20 overflow-hidden bg-[#e4f5ff] px-4 py-2 md:scroll-mt-24 md:px-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#e4f5ff] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#e4f5ff] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-5 flex w-full max-w-[420px] items-center justify-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          </div>

          <div className="mx-auto w-fit rounded-full border border-[#86CDFC]/60 bg-white/45 px-4 py-1.5 shadow-sm shadow-[#30435D]/5">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#30435D] md:text-xs">
              Servicios
            </p>
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl text-[1.7rem] font-black leading-tight tracking-[-0.03em] text-[#24344b] md:mt-5 md:text-5xl">
            Soluciones integrales de{" "}
            <span className="text-[#30435D]">gestión social</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#30435D]/85 md:mt-4 md:text-base md:leading-7">
            Acompañamos proyectos, comunidades e instituciones con estrategias
            sociales claras, profesionales y sostenibles.
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-[880px] gap-3.5 md:mt-9 md:grid-cols-[repeat(2,minmax(0,420px))] md:justify-center md:gap-4 xl:max-w-[1030px] xl:grid-cols-[repeat(3,minmax(0,320px))]">
          {servicios.map((servicio, index) => {
            const textoArriba = servicio.posicion === "arriba";
            const esUltima = index === servicios.length - 1;

            return (
              <article
                key={servicio.titulo}
                className={`group relative mx-auto aspect-[3/2] w-full max-w-[360px] cursor-pointer overflow-hidden rounded-[1.2rem] border border-[#86CDFC]/45 bg-[#eaf4ff] shadow-none ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:shadow-none active:scale-[0.98] min-[390px]:max-w-[375px] min-[430px]:max-w-[390px] sm:max-w-[480px] md:max-w-none md:rounded-[1.65rem] ${
                  esUltima ? "xl:col-start-2" : ""
                }`}
              >
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div
                  className={
                    textoArriba
                      ? "absolute inset-0 bg-gradient-to-br from-[#172338]/88 via-[#172338]/44 to-[#172338]/5"
                      : "absolute inset-0 bg-gradient-to-tr from-[#172338]/88 via-[#172338]/44 to-[#172338]/5 md:bg-gradient-to-br md:from-[#172338]/88 md:via-[#172338]/44 md:to-[#172338]/5"
                  }
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(134,205,252,0.18),transparent_38%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent md:h-24" />

                <div
                  className={`relative z-10 flex h-full flex-col p-3.5 text-white md:p-5 xl:p-3.5 ${
                    textoArriba
                      ? "items-start justify-start text-left"
                      : "items-start justify-end text-left"
                  }`}
                >
                  <h3 className="max-w-[94%] text-[14px] font-black leading-tight tracking-[-0.01em] text-white drop-shadow-xl min-[380px]:text-[15px] md:max-w-xl md:text-lg xl:text-[14px] xl:leading-tight">
                    {servicio.titulo}
                  </h3>

                  <p className="mt-1 max-w-[94%] text-[12px] font-semibold leading-[1.4] text-slate-100 drop-shadow-lg min-[380px]:text-[12.5px] md:mt-2 md:max-w-2xl md:text-sm md:leading-6 xl:mt-1.5 xl:text-[11px] xl:leading-[1.35]">
                    {servicio.texto}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}