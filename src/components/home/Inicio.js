"use client";

export default function Inicio() {
  const imagenDerecha = "/images/1.png";
  const imagenArriba = "/images/1top.png";

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
      className="relative -mb-px overflow-hidden scroll-mt-20 bg-[#e4f5ff] px-4 pt-7 pb-7 md:scroll-mt-24 md:px-8 md:pt-16 md:pb-10 lg:pt-24 lg:pb-4"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(134,205,252,0.72)_0%,rgba(176,229,255,0.88)_28%,rgba(228,245,255,0.98)_68%,#e4f5ff_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(134,205,252,0.35)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent_0%,#e4f5ff_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto max-w-7xl px-4 md:px-6 xl:px-8">
        <img
          src={imagenArriba}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 mt-0.5 w-[300px] -translate-x-1/2 select-none opacity-95 md:top-2 md:w-[400px] lg:left-1/2 lg:-mt-1 lg:w-[520px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#30435D] drop-shadow-sm md:text-sm lg:-mt-4">
            Construimos confianza.
            <br />
            Generamos sostenibilidad.
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-tight text-[#24344b] md:text-6xl lg:mx-0 lg:text-7xl">
            Gestión social estratégica
          </h1>

          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-sm leading-7 text-[#30435D]/85 md:text-lg md:leading-8 lg:mx-0">
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

          <div className="mt-7 grid gap-3 sm:flex sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => irASeccion("experiencia")}
              className="touch-manipulation cursor-pointer rounded-full bg-gradient-to-r from-[#24344b] via-[#30435D] to-[#1f2d40] px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white outline-none ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
            >
              Conoce nuestra experiencia
            </button>

            <button
              type="button"
              onClick={() => irASeccion("contacto")}
              className="touch-manipulation cursor-pointer rounded-full border border-[#30435D]/25 bg-white/80 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-[#30435D] shadow-sm shadow-[#30435D]/10 outline-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC] hover:bg-[#30435D] hover:text-white hover:shadow-lg hover:shadow-[#30435D]/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
            >
              Agenda una consulta
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative w-full">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#86CDFC]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.7rem] shadow-2xl shadow-[#30435D]/20 ring-1 ring-white/70">
              <img
                src={imagenDerecha}
                alt="Paisaje de energía renovable con sol, viento y sostenibilidad"
                className="block h-auto w-full"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />

              <div className="pointer-events-none absolute inset-0 bg-[#86CDFC]/5" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,transparent_50%,rgba(23,35,56,0.12)_100%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/35" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}