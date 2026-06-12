export default function Footer() {
  return (
    <footer className="bg-[#1f2d40] px-4 py-8 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-base font-black uppercase tracking-[0.16em]">
            Consultoría Social Bi Ne Bianni
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
            Gestión social, sostenibilidad y desarrollo territorial.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#86CDFC]">
            Selecciona la sección que quieres ver
          </p>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <a
              href="#inicio"
              className="cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              Servicios
            </a>
            <a
              href="#experiencia"
              className="cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              className="cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="text-sm leading-7 text-slate-300 md:col-span-2">
          <a
            href="mailto:binebianni@gmail.com"
            className="inline-block cursor-pointer rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
          >
            binebianni@gmail.com
          </a>

          <div>
            <a
              href="https://wa.me/5219711367924"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-md font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
            >
              +52 1 971 136 7924
            </a>
          </div>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-md font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:text-[#86CDFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2d40] active:translate-y-0 active:scale-95"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}