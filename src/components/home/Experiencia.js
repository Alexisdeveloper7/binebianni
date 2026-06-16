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
      className="relative -mt-px -mb-px scroll-mt-20 overflow-hidden bg-[#e4f5ff] px-4 pt-4 pb-6 md:scroll-mt-24 md:px-8 md:pt-5 md:pb-8 lg:pt-6 lg:pb-10"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-5 text-center md:mb-7">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 flex w-full max-w-[420px] items-center justify-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          </div>

          <p className="text-[10.5px] font-black uppercase tracking-[0.26em] text-[#30435D] md:text-[11.4px]">
            Experiencia
          </p>

          <h2 className="mt-2 text-[1.425rem] font-black tracking-tight text-[#172338] md:mt-3 md:text-[2.1375rem]">
            Indicadores que respaldan nuestro trabajo
          </h2>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:max-w-[1000px] sm:grid-cols-2 sm:justify-center md:gap-4 lg:grid-cols-4">
          {indicadores.map((indicador, index) => (
            <article
              key={index}
              className="group relative w-full overflow-hidden rounded-[1.2rem] border border-[#86CDFC]/35 bg-[#f7fcff] p-3 ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC]/65 hover:bg-white sm:max-w-[240px] sm:justify-self-center md:rounded-[1.35rem] md:p-4 lg:rounded-[1.45rem] lg:p-3.5"
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#86CDFC]/18 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/25" />
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#30435D]/4 blur-3xl" />

              <div className="relative flex min-h-[88px] min-w-0 items-center gap-3 text-left md:min-h-[108px] md:gap-4 lg:min-h-[155px] lg:flex-col lg:justify-center lg:gap-0 lg:text-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.1rem] bg-white ring-1 ring-[#86CDFC]/25 lg:mb-3 lg:h-[72px] lg:w-[72px] lg:rounded-[1.15rem]">
                  <img
                    src={indicador.icono}
                    alt={indicador.alt}
                    className={`object-contain ${
                      indicador.icono === "/images/ico3.png"
                        ? "h-24 w-24 md:h-24 md:w-24 lg:h-[88px] lg:w-[88px]"
                        : "h-14 w-14 md:h-16 md:w-16 lg:h-14 lg:w-14"
                    }`}
                  />
                </div>

                <div className="min-w-0 flex-1 overflow-hidden lg:w-full lg:flex-none">
                  {indicador.numero ? (
                    <div className="flex max-w-full flex-wrap items-end gap-x-1 gap-y-0 overflow-hidden text-[#30435D] lg:justify-center">
                      <span className="min-w-0 text-[1.55rem] font-black leading-none sm:text-[1.7rem] md:text-[2.15rem] lg:text-[2.15rem]">
                        {indicador.numero}
                      </span>

                      <span className="min-w-0 max-w-full break-words pb-[2px] text-[12px] font-black leading-none sm:text-[12.8px] md:pb-1 md:text-[14.5px] lg:text-[14px]">
                        {indicador.unidad}
                      </span>
                    </div>
                  ) : (
                    <h3 className="max-w-full break-words text-[17px] font-black leading-tight text-[#30435D] sm:text-[18px] md:text-[1.35rem] lg:text-[1.2rem]">
                      {indicador.titulo}
                    </h3>
                  )}

                  <p className="mt-1 max-w-full break-words text-[11px] font-semibold leading-snug text-[#30435D]/75 sm:text-[11.4px] md:mt-2 md:max-w-[180px] md:text-[12.5px] md:leading-relaxed lg:mx-auto lg:mt-2 lg:max-w-[150px] lg:text-[11.5px]">
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