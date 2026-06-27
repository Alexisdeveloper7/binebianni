"use client";

export default function Inicio() {
  const videoArriba = "/images/animacion-bnb.mp4";

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
    <section
      id="inicio"
      className="relative -mb-px overflow-hidden scroll-mt-20 bg-[#e4f5ff] px-4 pt-0 pb-7 md:scroll-mt-24 md:px-8 md:pt-0 md:pb-10 lg:pt-0 lg:pb-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(134,205,252,0.72)_0%,rgba(176,229,255,0.88)_28%,rgba(228,245,255,0.98)_68%,#e4f5ff_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(134,205,252,0.35)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent_0%,#e4f5ff_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mt-1 mb-1 flex w-[calc(100vw-2rem)] max-w-[711px] justify-center md:mb-2 md:w-[calc(100vw-4rem)] lg:mt-2 lg:mb-3">
          <div className="relative w-full rounded-[1.05rem] bg-gradient-to-br from-white/80 via-[#86CDFC]/80 to-[#30435D]/45 p-[2px]">
            <div className="relative overflow-hidden rounded-[0.95rem] bg-white/20 backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[0.95rem] ring-1 ring-white/60" />

              <video
                src={videoArriba}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                aria-hidden="true"
                className="block h-auto w-full select-none object-contain"
              />
            </div>
          </div>
        </div>

        <p className="text-[11.2px] font-black uppercase tracking-[0.21em] text-[#30435D] drop-shadow-sm md:text-[13px] lg:text-sm">
          Construimos confianza.
          <br />
          Generamos sostenibilidad.
        </p>

        <h1 className="mx-auto mt-1 max-w-3xl text-[34.3px] font-black leading-[0.96] tracking-tight text-[#24344b] md:mt-4 md:text-[42px] lg:text-[45px]">
          Gestión social estratégica
        </h1>

        <div className="mx-auto mt-1.5 max-w-2xl space-y-1.5 text-[12.9px] leading-[24px] text-[#30435D]/85 md:mt-5 md:space-y-4 md:text-[15px] md:leading-8 lg:text-base lg:leading-8">
          <p>
            Consultoría Social Bi Ne Bianni impulsa la sostenibilidad social
            de diversos proyectos mediante estrategias integrales de gestión
            social, relacionamiento comunitario y creación de valor
            compartido.
          </p>

          <p>
            Respaldados por una trayectoria profesional que se remonta a 2010,
            acompañamos a empresas e instituciones en la identificación de
            oportunidades, la gestión de riesgos sociales y el fortalecimiento
            de vínculos con comunidades y grupos de interés.
          </p>
        </div>

        <div className="mt-2 grid w-full max-w-md gap-2.5 sm:flex sm:max-w-none sm:justify-center md:mt-7 md:gap-3">
          <button
            type="button"
            onClick={() => irASeccion("experiencia")}
            className="touch-manipulation cursor-pointer rounded-full bg-gradient-to-r from-[#24344b] via-[#30435D] to-[#1f2d40] px-[21.4px] py-[12.4px] text-center text-[11px] font-bold uppercase tracking-wide text-white outline-none ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:px-7 md:py-4 md:text-[13px] lg:px-8 lg:text-[13.5px]"
          >
            Conoce nuestra experiencia
          </button>

          <button
            type="button"
            onClick={() => irASeccion("contacto")}
            className="touch-manipulation cursor-pointer rounded-full border border-[#30435D]/25 bg-white/80 px-[21.4px] py-[12.4px] text-center text-[11px] font-bold uppercase tracking-wide text-[#30435D] shadow-sm shadow-[#30435D]/10 outline-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC] hover:bg-[#30435D] hover:text-white hover:shadow-lg hover:shadow-[#30435D]/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:px-7 md:py-4 md:text-[13px] lg:px-8 lg:text-[13.5px]"
          >
            Agenda una consulta
          </button>
        </div>
      </div>
    </section>
  );
}