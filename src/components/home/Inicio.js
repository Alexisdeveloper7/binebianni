"use client";

import { useEffect, useRef } from "react";

export default function Inicio() {
  const imagenDerecha = "/images/1.png";
  const videoArriba = "/images/animacion-bnb.mp4";
  const videoRef = useRef(null);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reproducir = async () => {
      try {
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.controls = false;

        video.setAttribute("muted", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        video.removeAttribute("controls");

        if (video.paused && !document.hidden) {
          await video.play();
        }
      } catch {
        // Algunos navegadores bloquean autoplay por ahorro de batería/datos.
      }
    };

    const evitarPausa = () => {
      if (!document.hidden) {
        reproducir();
      }
    };

    reproducir();

    video.addEventListener("loadedmetadata", reproducir);
    video.addEventListener("loadeddata", reproducir);
    video.addEventListener("canplay", reproducir);
    video.addEventListener("pause", evitarPausa);
    document.addEventListener("visibilitychange", reproducir);
    window.addEventListener("focus", reproducir);
    window.addEventListener("touchstart", reproducir, { once: true });
    window.addEventListener("click", reproducir, { once: true });
    window.addEventListener("scroll", reproducir, { once: true });

    return () => {
      video.removeEventListener("loadedmetadata", reproducir);
      video.removeEventListener("loadeddata", reproducir);
      video.removeEventListener("canplay", reproducir);
      video.removeEventListener("pause", evitarPausa);
      document.removeEventListener("visibilitychange", reproducir);
      window.removeEventListener("focus", reproducir);
      window.removeEventListener("touchstart", reproducir);
      window.removeEventListener("click", reproducir);
      window.removeEventListener("scroll", reproducir);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative -mb-px overflow-hidden scroll-mt-20 bg-[#e4f5ff] px-4 pt-2 pb-1 md:min-h-screen md:scroll-mt-24 md:px-8 md:pt-0 md:pb-10 lg:pt-0 lg:pb-4"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(134,205,252,0.72)_0%,rgba(176,229,255,0.88)_28%,rgba(228,245,255,0.98)_68%,#e4f5ff_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(134,205,252,0.35)_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent_0%,#e4f5ff_100%)]" />

      <div className="relative z-10 mb-2 flex w-full justify-center md:mt-1 md:mb-1.5 lg:mt-2 lg:mb-1">
        <div className="pointer-events-none relative w-[94vw] overflow-hidden rounded-[0.85rem] md:w-auto md:rounded-[0.7rem]">
          <video
            ref={videoRef}
            src={videoArriba}
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            aria-hidden="true"
            tabIndex={-1}
            onContextMenu={(e) => e.preventDefault()}
            onPause={() => {
              const video = videoRef.current;

              if (video && !document.hidden) {
                video.play().catch(() => {});
              }
            }}
            className="pointer-events-none block h-auto w-full select-none object-contain md:h-[90px] md:w-auto lg:h-[105px]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10">
        <div className="w-full text-center lg:text-left">
          <p className="text-[9.9px] font-black uppercase leading-4 tracking-[0.18em] text-[#30435D] drop-shadow-sm md:text-[15.4px] lg:text-[12.1px] lg:leading-5 xl:text-[15.4px]">
            Construimos confianza.
            <br />
            Generamos sostenibilidad.
          </p>

          <h1 className="mx-auto mt-2 max-w-3xl text-[34.2px] font-black leading-[0.93] tracking-tight text-[#24344b] md:mt-4 md:text-[66.2px] lg:mx-0 lg:text-[64px] lg:leading-[0.94] xl:text-[79.4px] xl:leading-[0.98]">
            Gestión social estratégica
          </h1>

          <div className="mx-auto mt-3 max-w-2xl space-y-2 text-[13.2px] leading-[1.55] text-[#30435D]/85 md:mt-5 md:space-y-4 md:text-[19.8px] md:leading-8 lg:mx-0 lg:mt-4 lg:space-y-3 lg:text-[17.6px] lg:leading-7 xl:mt-5 xl:space-y-4 xl:text-[19.8px] xl:leading-8">
            <p>
              Consultoría Social Bi Ne Bianni impulsa la sostenibilidad social
              de diversos proyectos mediante estrategias integrales de gestión
              social, relacionamiento comunitario y creación de valor
              compartido.
            </p>

            <p>
              Respaldados por una trayectoria profesional que se remonta a
              2010, acompañamos a empresas e instituciones en la identificación
              de oportunidades, la gestión de riesgos sociales y el
              fortalecimiento de vínculos con comunidades y grupos de interés.
            </p>
          </div>

          <div className="mt-3 grid gap-2.5 sm:flex sm:justify-center lg:mt-5 lg:justify-start xl:mt-7">
            <button
              type="button"
              onClick={() => irASeccion("experiencia")}
              className="touch-manipulation cursor-pointer rounded-full bg-gradient-to-r from-[#24344b] via-[#30435D] to-[#1f2d40] px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-wide text-white outline-none ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:px-6 md:py-3.5 md:text-[13.2px] lg:px-5 lg:py-3 lg:text-[12.1px] xl:px-6 xl:py-3.5 xl:text-[13.2px]"
            >
              Conoce nuestra experiencia
            </button>

            <button
              type="button"
              onClick={() => irASeccion("contacto")}
              className="touch-manipulation cursor-pointer rounded-full border border-[#30435D]/25 bg-white/80 px-5 py-2.5 text-center text-[11px] font-bold uppercase tracking-wide text-[#30435D] shadow-sm shadow-[#30435D]/10 outline-none backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC] hover:bg-[#30435D] hover:text-white hover:shadow-lg hover:shadow-[#30435D]/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98] md:px-6 md:py-3.5 md:text-[13.2px] lg:px-5 lg:py-3 lg:text-[12.1px] xl:px-6 xl:py-3.5 xl:text-[13.2px]"
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