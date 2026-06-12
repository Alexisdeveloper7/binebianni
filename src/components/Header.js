"use client";

export default function Header() {
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[74px] max-w-7xl items-center justify-between gap-3 px-4 md:px-6 xl:px-8">
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={(e) => {
            e.preventDefault();
            irASeccion("inicio");
          }}
          className="group flex min-w-0 shrink-0 cursor-pointer items-center rounded-2xl outline-none transition-all duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <img
            src="/images/logo.png"
            alt="Bi Ne Bianni"
            className="h-10 w-auto max-w-[145px] object-contain transition-all duration-300 group-hover:opacity-90 sm:h-11 sm:max-w-[175px] md:max-w-[125px] lg:max-w-[175px] xl:h-12 xl:max-w-[205px]"
          />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center overflow-x-auto px-1 [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-inner shadow-white">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  irASeccion(link.id);
                }}
                className="shrink-0 cursor-pointer whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-bold text-slate-600 outline-none transition-all duration-300 hover:bg-white hover:text-[#30435D] hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:scale-95 lg:px-4 lg:py-2.5 lg:text-sm xl:px-5"
              >
                {link.nombre}
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => irASeccion("contacto")}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#30435D] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#30435D]/20 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26364c] hover:shadow-xl hover:shadow-[#30435D]/25 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 sm:px-5 sm:py-3 sm:text-[11px]"
        >
          <span>Solicitar consulta</span>
        </button>
      </div>
    </header>
  );
}