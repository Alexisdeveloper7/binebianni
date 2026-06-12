"use client";

import { useState } from "react";

export default function Header() {
  const [botonPresionado, setBotonPresionado] = useState("");

  const irASeccion = (id) => {
    setBotonPresionado(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );

    setTimeout(() => {
      setBotonPresionado("");
    }, 450);
  };

  const links = [
    { nombre: "Inicio", id: "inicio" },
    { nombre: "Nosotros", id: "nosotros" },
    { nombre: "Servicios", id: "servicios" },
    { nombre: "Experiencia", id: "experiencia" },
    { nombre: "Contacto", id: "contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#30435D]/45 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex min-h-[74px] max-w-7xl items-center justify-between gap-3 px-4 md:px-6 xl:px-8">
        <button
          type="button"
          aria-label="Ir al inicio"
          onClick={() => irASeccion("inicio")}
          className={`group flex min-w-0 shrink-0 touch-manipulation cursor-pointer items-center rounded-2xl outline-none transition-[background-color,box-shadow,ring-color] duration-300 lg:hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 ${
            botonPresionado === "inicio"
              ? "bg-[#eef8ff] ring-2 ring-[#86CDFC]/60 ring-offset-2 ring-offset-white shadow-md shadow-[#86CDFC]/20"
              : ""
          }`}
        >
          <img
            src="/images/logo.png"
            alt="Bi Ne Bianni"
            className={`h-10 w-auto max-w-[145px] object-contain transition-opacity duration-300 group-hover:opacity-90 sm:h-11 sm:max-w-[175px] md:max-w-[125px] lg:max-w-[150px] xl:h-12 xl:max-w-[205px] ${
              botonPresionado === "inicio" ? "opacity-90" : ""
            }`}
          />
        </button>

        <nav className="hidden min-w-0 flex-1 items-center justify-center px-2 lg:flex">
          <div className="flex max-w-full items-center gap-1 rounded-full border border-slate-200 bg-[#f6f9fc] p-1 shadow-inner shadow-white">
            {links.map((link) => {
              const activo = botonPresionado === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => irASeccion(link.id)}
                  className={`group/link shrink-0 touch-manipulation cursor-pointer whitespace-nowrap rounded-full border px-3 py-2 text-xs font-bold outline-none transition-[background-color,border-color,color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 xl:px-5 xl:py-2.5 xl:text-sm ${
                    activo
                      ? "border-[#86CDFC]/60 bg-[#30435D] text-white shadow-md shadow-[#30435D]/20"
                      : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-white hover:text-[#30435D] hover:shadow-sm"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`size-1.5 rounded-full transition-colors duration-300 ${
                        activo
                          ? "bg-[#86CDFC]"
                          : "bg-slate-300 group-hover/link:bg-[#86CDFC]"
                      }`}
                    />

                    {link.nombre}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => irASeccion("contacto")}
          className={`group relative inline-flex shrink-0 touch-manipulation cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#30435D]/15 bg-[#30435D] px-3.5 py-2.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#30435D]/20 outline-none transition-[background-color,box-shadow,ring-color] duration-300 lg:hover:-translate-y-0.5 hover:bg-[#26364c] hover:shadow-xl hover:shadow-[#30435D]/25 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-[11px] ${
            botonPresionado === "contacto"
              ? "bg-[#1f2d40] ring-2 ring-[#86CDFC]/70 ring-offset-2 ring-offset-white"
              : ""
          }`}
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <span className="relative flex items-center gap-2 whitespace-nowrap">
            Solicitar consulta

            <span
              className={`grid size-4 place-items-center rounded-full text-[9px] leading-none transition-colors duration-300 sm:size-5 sm:text-[10px] ${
                botonPresionado === "contacto"
                  ? "bg-[#86CDFC] text-[#30435D]"
                  : "bg-white/15 text-white group-hover:bg-white/20"
              }`}
            >
              →
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}