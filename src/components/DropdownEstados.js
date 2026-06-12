"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const estadosMexico = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

export default function DropdownEstados({
  estado,
  abierto,
  onToggle,
  onCerrar,
  onSeleccionar,
}) {
  const [portalListo, setPortalListo] = useState(false);
  const [montado, setMontado] = useState(false);
  const [visible, setVisible] = useState(false);

  const listaRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const rafRef = useRef(null);

  const pintarBarra = () => {
    const lista = listaRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;

    if (!lista || !track || !thumb) return;

    const { scrollTop, scrollHeight, clientHeight } = lista;
    const trackHeight = track.clientHeight;
    const puedeScroll = scrollHeight > clientHeight + 1;

    if (!puedeScroll) {
      thumb.style.height = `${trackHeight}px`;
      thumb.style.transform = "translate3d(0, 0, 0)";
      thumb.style.opacity = "0.45";
      return;
    }

    const alturaMinima = 38;
    const thumbHeight = Math.max(
      alturaMinima,
      (clientHeight / scrollHeight) * trackHeight
    );

    const maxScroll = scrollHeight - clientHeight;
    const maxThumbTop = trackHeight - thumbHeight;
    const thumbTop = maxScroll > 0 ? (scrollTop / maxScroll) * maxThumbTop : 0;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translate3d(0, ${thumbTop}px, 0)`;
    thumb.style.opacity = "1";
  };

  const actualizarBarra = () => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      pintarBarra();
      rafRef.current = null;
    });
  };

  useEffect(() => {
    setPortalListo(true);
  }, []);

  useEffect(() => {
    if (abierto) {
      setMontado(true);

      const animacion = requestAnimationFrame(() => {
        setVisible(true);

        requestAnimationFrame(() => {
          pintarBarra();
        });
      });

      return () => cancelAnimationFrame(animacion);
    }

    setVisible(false);

    const cerrar = setTimeout(() => {
      setMontado(false);
    }, 220);

    return () => clearTimeout(cerrar);
  }, [abierto]);

  useEffect(() => {
    if (!montado) return;

    const bodyOverflowOriginal = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflowOriginal;
    };
  }, [montado]);

  useEffect(() => {
    if (!montado) return;

    const cerrarConEscape = (e) => {
      if (e.key === "Escape") {
        onCerrar();
      }
    };

    const actualizarConResize = () => {
      actualizarBarra();
    };

    window.addEventListener("keydown", cerrarConEscape);
    window.addEventListener("resize", actualizarConResize);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
      window.removeEventListener("resize", actualizarConResize);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [montado, onCerrar]);

  const seleccionar = (valor) => {
    onSeleccionar(valor);
  };

  const modalEstados = montado ? (
    <div
      className="fixed left-0 top-0 z-[2147483647] w-screen overflow-hidden"
      style={{
        height: "calc(100dvh + 180px)",
      }}
    >
      <div
        onClick={onCerrar}
        className={`absolute inset-0 cursor-pointer bg-black/65 backdrop-blur-[4px] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        onClick={onCerrar}
        className="fixed inset-0 flex items-center justify-center p-4"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="tituloEstados"
          onClick={(e) => e.stopPropagation()}
          className={`flex max-h-[calc(100dvh-7rem)] w-[88%] max-w-xs flex-col overflow-hidden rounded-2xl border border-cyan-300/25 bg-[radial-gradient(circle_at_20%_0%,rgba(125,211,252,0.28),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(14,165,233,0.22),transparent_32%),linear-gradient(135deg,#07182A_0%,#0F2A44_45%,#123C5A_100%)] shadow-2xl shadow-sky-950/60 transition-all duration-200 ${
            visible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-3 scale-[0.97] opacity-0"
          }`}
        >
          <div className="bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(125,211,252,0.14),rgba(14,165,233,0.08))] px-3.5 py-2.5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-200">
                  Estado del proyecto
                </p>

                <p
                  id="tituloEstados"
                  className="mt-0.5 bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-xs font-black text-transparent"
                >
                  Selecciona una ubicación
                </p>
              </div>

              <button
                type="button"
                onClick={onCerrar}
                className="grid size-7 shrink-0 cursor-pointer place-items-center rounded-full border border-cyan-200/20 bg-white/10 text-xs font-black text-cyan-100 shadow-sm shadow-black/20 transition-all duration-200 hover:bg-cyan-100/20 active:scale-95"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="border-b border-cyan-200/15 bg-white/[0.08] p-1.5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => seleccionar("")}
              className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs font-black transition-all duration-200 ${
                !estado
                  ? "bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 text-white shadow-md shadow-sky-500/30"
                  : "bg-white/95 text-slate-600 shadow-sm shadow-sky-950/10 hover:bg-cyan-50 hover:text-[#0F2A44]"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2">
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] ${
                    !estado
                      ? "bg-white/20 text-white"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  —
                </span>

                <span className="truncate">Selecciona un estado</span>
              </span>

              {!estado && <span className="text-[10px]">✓</span>}
            </button>
          </div>

          <div className="relative min-h-0 flex-1 bg-white/95">
            <div
              ref={listaRef}
              onScroll={actualizarBarra}
              style={{
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
              }}
              className="max-h-[calc(100dvh-18rem)] min-h-0 touch-pan-y overflow-y-auto bg-[linear-gradient(180deg,#ffffff_0%,#f0f9ff_100%)] p-1.5 pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {estadosMexico.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => seleccionar(item)}
                  className={`group flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-left text-xs font-bold transition-all duration-200 ${
                    estado === item
                      ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/35 ring-1 ring-cyan-100/50"
                      : "text-slate-700 hover:bg-cyan-100/70 hover:text-[#0F2A44]"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] font-black transition-all duration-200 ${
                        estado === item
                          ? "bg-white/25 text-white shadow-inner"
                          : "bg-sky-100 text-sky-600 group-hover:bg-white group-hover:text-[#0F2A44]"
                      }`}
                    >
                      MX
                    </span>

                    <span className="truncate">{item}</span>
                  </span>

                  {estado === item && <span className="text-[10px]">✓</span>}
                </button>
              ))}
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white via-white/90 to-transparent" />

            <div
              ref={trackRef}
              className="pointer-events-none absolute bottom-2 right-1.5 top-2 w-1.5 rounded-full bg-sky-100 shadow-inner shadow-sky-950/10"
            >
              <div
                ref={thumbRef}
                className="absolute left-0 right-0 top-0 rounded-full bg-gradient-to-b from-cyan-300 to-sky-600 shadow-[0_0_0_2px_rgba(255,255,255,0.9),0_0_18px_rgba(14,165,233,0.45)] will-change-transform"
                style={{
                  height: "38px",
                  transform: "translate3d(0, 0, 0)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="relative">
      <button
        id="estadoBoton"
        type="button"
        onClick={onToggle}
        aria-haspopup="dialog"
        aria-expanded={abierto}
        className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg border border-cyan-300/35 bg-white/95 px-3 py-2 text-left text-base font-semibold shadow-[0_8px_22px_rgba(8,47,73,0.16)] outline-none transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-[0_10px_28px_rgba(14,165,233,0.22)] focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-300/60 md:rounded-xl md:px-3.5 md:py-3 md:text-sm ${
          estado ? "text-slate-900" : "text-slate-400"
        }`}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#0F2A44] via-[#155E86] to-[#0EA5E9] text-[10px] font-black text-white shadow-sm shadow-sky-500/25">
            MX
          </span>

          <span className="truncate">{estado || "Selecciona un estado"}</span>
        </span>

        <span
          className={`grid size-7 shrink-0 place-items-center rounded-full bg-sky-100 text-[10px] text-[#0F2A44] shadow-inner shadow-sky-950/10 transition-transform duration-300 ${
            abierto ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {portalListo && createPortal(modalEstados, document.body)}
    </div>
  );
}