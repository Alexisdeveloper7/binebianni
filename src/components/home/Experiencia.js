const indicadores = [
  {
    numero: "+15",
    unidad: "años",
    texto: "de experiencia acumulada",
    icono: "/images/ico1.png",
    alt: "Icono de crecimiento",
  },
  {
    numero: "+200",
    unidad: "proyectos",
    texto: "desarrollados",
    icono: "/images/ico2.png",
    alt: "Icono de proyectos",
  },
  {
    numero: "10",
    unidad: "estados",
    texto: "de la República Mexicana",
    icono: "/images/ico3.png",
    alt: "Icono de México",
  },
  {
    titulo: "Gestión Social",
    texto: "como eje estratégico",
    icono: "/images/ico4.png",
    alt: "Icono de gestión social",
  },
];

export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 bg-white px-4 pt-2 pb-8 md:scroll-mt-24 md:px-8 md:pt-4 md:pb-16 lg:pt-5 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-10">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#30435D] md:text-xs">
            Experiencia
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-[#172338] md:mt-3 md:text-4xl">
            Indicadores que respaldan nuestro trabajo
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {indicadores.map((indicador, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-[1.25rem] border border-[#d8e8f7] bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf7ff] p-3 shadow-lg shadow-[#30435D]/10 ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 md:rounded-[1.45rem] md:p-5 lg:rounded-[1.7rem] lg:p-6"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#86CDFC]/25 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/35 md:h-36 md:w-36" />

              <div className="relative flex min-h-[92px] items-center gap-3 text-left md:min-h-[120px] md:gap-4 lg:min-h-[230px] lg:flex-col lg:justify-center lg:gap-0 lg:text-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.1rem] bg-white shadow-md shadow-[#30435D]/10 ring-1 ring-[#86CDFC]/30 lg:mb-5 lg:h-24 lg:w-24 lg:rounded-[1.4rem]">
                  <img
                    src={indicador.icono}
                    alt={indicador.alt}
                    className={`object-contain ${
                      indicador.icono === "/images/ico3.png"
                        ? "h-24 w-24 md:h-24 md:w-24 lg:h-28 lg:w-28"
                        : "h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
                    }`}
                  />
                </div>

                <div className="min-w-0 flex-1 lg:flex-none">
                  {indicador.numero ? (
                    <div className="flex items-end gap-1 text-[#30435D] lg:justify-center">
                      <span className="text-3xl font-black leading-none md:text-5xl">
                        {indicador.numero}
                      </span>

                      <span className="pb-[2px] text-sm font-black leading-none md:pb-1 md:text-lg lg:text-xl">
                        {indicador.unidad}
                      </span>
                    </div>
                  ) : (
                    <h3 className="text-xl font-black leading-tight text-[#30435D] md:text-3xl">
                      {indicador.titulo}
                    </h3>
                  )}

                  <p className="mt-1 max-w-[170px] text-xs font-semibold leading-snug text-[#30435D]/75 md:mt-2 md:max-w-[190px] md:text-sm md:leading-relaxed lg:mx-auto lg:mt-3 lg:max-w-[180px]">
                    {indicador.texto}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}