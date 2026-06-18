export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative -mt-px -mb-px scroll-mt-20 overflow-hidden bg-[#e4f5ff] px-4 py-1 md:scroll-mt-24 md:px-8 md:py-"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#86CDFC]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-6 h-72 w-72 rounded-full bg-white/35 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          aria-hidden="true"
          className="mx-auto mb-4 flex w-full max-w-[420px] items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
        </div>

        <div className="mx-auto grid items-center gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:gap-7">
          <div className="group touch-manipulation relative mx-auto min-h-[250px] w-full max-w-[510px] cursor-pointer overflow-hidden rounded-[1.5rem] border border-[#86CDFC]/50 bg-[#f4fbff] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/90 hover:bg-white active:scale-[0.99] md:min-h-[295px] md:rounded-[2rem]">
            <img
              src="/images/222.png"
              alt="Relaciones comunitarias y valor compartido"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#172338]/70 via-[#30435D]/50 to-[#86CDFC]/20 transition-all duration-300 group-hover:from-[#172338]/65 group-hover:via-[#30435D]/45 group-hover:to-[#86CDFC]/28" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#172338]/70 to-transparent" />

            <div className="relative flex min-h-[250px] flex-col items-center justify-center px-6 py-5 text-center md:min-h-[295px] md:px-8 md:py-6 lg:px-9">
              <div className="rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-sm transition-all duration-300 group-hover:border-[#86CDFC]/50 group-hover:bg-white/15">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#bfeaff] md:text-xs">
                  Quiénes somos
                </p>
              </div>

              <h2 className="mt-3 max-w-[500px] text-[1.5rem] font-black leading-tight text-white drop-shadow-xl md:text-3xl lg:text-[2.05rem]">
                Construimos relaciones que generan valor compartido
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#86CDFC] transition-all duration-300 group-hover:w-20 group-hover:bg-[#bfeaff]" />
            </div>
          </div>

          <div className="group touch-manipulation mx-auto w-full max-w-3xl cursor-pointer rounded-[1.5rem] border border-[#86CDFC]/35 bg-white/45 px-4 py-4 text-center ring-1 ring-white/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:bg-white/60 active:scale-[0.99] md:rounded-[2rem] md:px-6 md:py-5 lg:px-7">
            <div className="space-y-2 text-[14px] font-semibold leading-6 text-[#30435D]/90 md:text-base md:leading-7">
              <p className="text-[15px] font-black leading-6 text-[#24344b] transition-colors duration-300 group-hover:text-[#172338] md:text-lg md:leading-7">
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
                oportunidades, gestionar riesgos sociales y construir relaciones
                de confianza que favorecen la sostenibilidad de largo plazo.
              </p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-4 flex w-full max-w-[420px] items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
        </div>
      </div>
    </section>
  );
}