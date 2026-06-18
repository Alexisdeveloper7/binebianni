"use client";

import { useEffect, useState } from "react";

function bloquearScroll() {
  if (typeof window === "undefined") return () => {};

  const scrollY = window.scrollY;
  const scrollX = window.scrollX;
  const anchoScrollbar =
    window.innerWidth - document.documentElement.clientWidth;

  window.__modalScrollLockCount = (window.__modalScrollLockCount || 0) + 1;

  if (window.__modalScrollLockCount === 1) {
    window.__modalOriginalBodyPosition = document.body.style.position;
    window.__modalOriginalBodyTop = document.body.style.top;
    window.__modalOriginalBodyLeft = document.body.style.left;
    window.__modalOriginalBodyRight = document.body.style.right;
    window.__modalOriginalBodyWidth = document.body.style.width;
    window.__modalOriginalBodyPaddingRight = document.body.style.paddingRight;
    window.__modalOriginalHtmlScrollBehavior =
      document.documentElement.style.scrollBehavior;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.right = "0";
    document.body.style.width = "100%";

    if (anchoScrollbar > 0) {
      document.body.style.paddingRight = `${anchoScrollbar}px`;
    }

    window.__modalScrollY = scrollY;
    window.__modalScrollX = scrollX;
  }

  return () => {
    window.__modalScrollLockCount = Math.max(
      (window.__modalScrollLockCount || 1) - 1,
      0
    );

    if (window.__modalScrollLockCount === 0) {
      const scrollYGuardado = window.__modalScrollY || 0;
      const scrollXGuardado = window.__modalScrollX || 0;

      document.documentElement.style.scrollBehavior = "auto";

      document.body.style.position = window.__modalOriginalBodyPosition || "";
      document.body.style.top = window.__modalOriginalBodyTop || "";
      document.body.style.left = window.__modalOriginalBodyLeft || "";
      document.body.style.right = window.__modalOriginalBodyRight || "";
      document.body.style.width = window.__modalOriginalBodyWidth || "";
      document.body.style.paddingRight =
        window.__modalOriginalBodyPaddingRight || "";

      window.scrollTo({
        left: scrollXGuardado,
        top: scrollYGuardado,
        behavior: "auto",
      });

      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior =
          window.__modalOriginalHtmlScrollBehavior || "";

        delete window.__modalOriginalBodyPosition;
        delete window.__modalOriginalBodyTop;
        delete window.__modalOriginalBodyLeft;
        delete window.__modalOriginalBodyRight;
        delete window.__modalOriginalBodyWidth;
        delete window.__modalOriginalBodyPaddingRight;
        delete window.__modalOriginalHtmlScrollBehavior;
        delete window.__modalScrollY;
        delete window.__modalScrollX;
      });
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

  const cancelar = () => {
    if (cargando) return;
    onCancelar?.();
  };

  const confirmar = () => {
    if (cargando) return;
    onConfirmar?.();
  };

  if (!renderizar) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-confirmar-titulo"
      className={`fixed inset-0 z-[999] flex items-center justify-center px-4 transition-all duration-300 ease-out ${
        visible ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-[2rem] bg-white p-6 text-center shadow-2xl transition-all duration-300 ease-out ${
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-6 scale-95 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#86CDFC]/25 text-3xl font-black text-[#30435D]">
          ?
        </div>

        <h3
          id="modal-confirmar-titulo"
          className="mt-5 text-2xl font-black text-[#30435D]"
        >
          Confirmar envío
        </h3>

        <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
          ¿Deseas enviar esta solicitud de contacto?
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={cancelar}
            disabled={cargando}
            className="cursor-pointer rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-700 outline-none transition-all duration-300 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-white"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={confirmar}
            disabled={cargando}
            className="cursor-pointer rounded-full bg-[#30435D] px-5 py-3 text-sm font-black uppercase tracking-wide text-white outline-none transition-all duration-300 hover:bg-[#26364c] hover:shadow-lg hover:shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#30435D] disabled:hover:shadow-none"
          >
            {cargando ? "Enviando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}