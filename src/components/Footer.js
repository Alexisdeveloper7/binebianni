"use client";

export default function Footer() {
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

  const links = [
    { nombre: "Inicio", id: "inicio" },
    { nombre: "Nosotros", id: "nosotros" },
    { nombre: "Servicios", id: "servicios" },
    { nombre: "Experiencia", id: "experiencia" },
    { nombre: "Contacto", id: "contacto" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-[linear-gradient(135deg,#162435_0%,#20364D_48%,#27445F_100%)] px-4 py-5 text-center text-white shadow-[0_-18px_45px_rgba(15,23,42,0.12)] md:px-8 md:py-6">
      <div className="mx-auto grid max-w-7xl place-items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-white md:text-base md:tracking-[0.16em]">
            Consultoría Social Bi Ne Bianni
          </p>

          <p className="mt-1.5 max-w-md text-xs leading-5 text-slate-300 md:text-sm">
            Gestión social, sostenibilidad y desarrollo territorial.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#9ED8FF] md:text-xs md:tracking-[0.16em]">
            Selecciona la sección que quieres ver
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-1 overflow-hidden text-[10px] font-semibold text-slate-300 md:gap-2 md:text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => irASeccion(link.id)}
                className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-200 transition-all duration-200 hover:border-[#9ED8FF]/35 hover:bg-white/10 hover:text-[#9ED8FF] focus:border-[#9ED8FF]/45 focus:bg-[#9ED8FF]/15 focus:text-[#9ED8FF] focus:outline-none focus:ring-2 focus:ring-[#9ED8FF]/50 focus:ring-offset-2 focus:ring-offset-[#20364D] active:scale-[0.97] active:border-[#9ED8FF]/60 active:bg-[#9ED8FF]/20 active:text-white md:px-2.5 md:text-sm"
              >
                {link.nombre}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[10px] font-semibold tracking-wide text-slate-400 md:text-xs">
          © {new Date().getFullYear()} Consultoría Social Bi Ne Bianni. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}