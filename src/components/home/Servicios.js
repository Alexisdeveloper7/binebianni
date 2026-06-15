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
    texto: (
      <>
        Integración de criterios ambientales,
        <br />
        sociales y de gobernanza en proyectos
        <br />
        y organizaciones.
      </>
    ),
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
      className="scroll-mt-20 px-4 py-7 md:scroll-mt-24 md:px-8 md:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
          Servicios
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#24344b] md:text-5xl">
          Soluciones integrales de gestión social
        </h2>

        <div className="mt-5 grid gap-4 md:mt-7 md:grid-cols-2 lg:grid-cols-2">
          {servicios.map((servicio) => {
            const textoArriba = servicio.posicion === "arriba";

            return (
              <article
                key={servicio.titulo}
                className="group relative aspect-[16/9] overflow-hidden rounded-2xl shadow-xl shadow-[#30435D]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#86CDFC]/20 active:scale-[0.98] md:rounded-[1.5rem]"
              >
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="absolute inset-0 h-full w-full object-fill"
                />

                <div
                  className={
                    textoArriba
                      ? "absolute inset-0 bg-gradient-to-br from-[#172338]/95 via-[#172338]/55 to-[#172338]/10"
                      : "absolute inset-0 bg-gradient-to-tr from-[#172338]/95 via-[#172338]/55 to-[#172338]/5 md:bg-gradient-to-br md:from-[#172338]/95 md:via-[#172338]/55 md:to-[#172338]/10"
                  }
                />

                <div
                  className={`relative z-10 flex h-full flex-col p-4 text-white md:items-start md:justify-start md:p-6 md:text-left ${
                    textoArriba
                      ? "items-start justify-start text-left"
                      : "items-start justify-end text-left"
                  }`}
                >
                  <h3 className="max-w-xl text-base font-black leading-tight md:text-xl">
                    {servicio.titulo}
                  </h3>

                  <p className="mt-2 max-w-2xl text-[13px] font-semibold leading-5 text-slate-100 md:text-base md:leading-7">
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