"use client";

import { useEffect, useState } from "react";

function bloquearScroll() {
  if (typeof window === "undefined") return () => {};

  window.__modalScrollLockCount = (window.__modalScrollLockCount || 0) + 1;

  if (window.__modalScrollLockCount === 1) {
    window.__modalOriginalBodyOverflow = document.body.style.overflow;
    window.__modalOriginalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  return () => {
    window.__modalScrollLockCount = Math.max(
      (window.__modalScrollLockCount || 1) - 1,
      0
    );

    if (window.__modalScrollLockCount === 0) {
      document.body.style.overflow = window.__modalOriginalBodyOverflow || "";
      document.documentElement.style.overflow =
        window.__modalOriginalHtmlOverflow || "";

      delete window.__modalOriginalBodyOverflow;
      delete window.__modalOriginalHtmlOverflow;
    }
  };
}

export default function ModalConfirmarEnvio({
  abierto,
  cargando,
  onCancelar,
  onConfirmar,
}) {
  const [renderizar, setRenderizar] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (abierto) {
      setRenderizar(true);

      timer = setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);

      timer = setTimeout(() => {
        setRenderizar(false);
      }, 250);
    }

    return () => clearTimeout(timer);
  }, [abierto]);

  useEffect(() => {
    if (!renderizar) return;

    const desbloquear = bloquearScroll();

    return () => {
      desbloquear();
    };
  }, [renderizar]);

  if (!renderizar) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center px-4 backdrop-blur-sm transition-all duration-300 ease-out ${
        visible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-[2rem] bg-white p-6 text-center shadow-2xl transition-all duration-300 ease-out ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-90 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#86CDFC]/25 text-3xl font-black text-[#30435D]">
          ?
        </div>

        <h3 className="mt-5 text-2xl font-black text-[#30435D]">
          Confirmar envío
        </h3>

        <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
          ¿Deseas enviar esta solicitud de contacto?
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancelar}
            disabled={cargando}
            className="cursor-pointer rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-700 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onConfirmar}
            disabled={cargando}
            className="cursor-pointer rounded-full bg-[#30435D] px-5 py-3 text-sm font-black uppercase tracking-wide text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26364c] hover:shadow-lg hover:shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#30435D] disabled:hover:shadow-none"
          >
            {cargando ? "Enviando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}