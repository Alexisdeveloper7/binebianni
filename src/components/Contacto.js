"use client";

import { useState } from "react";
import ModalConfirmarEnvio from "@/components/ModalConfirmacion";
import ModalCorreoEnviado from "@/components/ModalCorreoEnviado";
import DropdownEstados from "@/components/DropdownEstados";

const estadoInicial = {
  nombre: "",
  empresa: "",
  cargo: "",
  correo: "",
  telefono: "",
  tipoProyecto: "",
  estado: "",
  mensaje: "",
};

const inputClass =
  "rounded-lg border border-cyan-300/35 bg-white/95 px-2 py-[3px] text-left text-base font-semibold text-slate-900 shadow-[0_4px_12px_rgba(8,47,73,0.13)] outline-none transition-all duration-300 placeholder:text-left placeholder:text-slate-400 hover:border-sky-300 hover:bg-white hover:shadow-[0_6px_18px_rgba(14,165,233,0.18)] focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-300/55 md:rounded-xl md:px-2.5 md:py-[4px] md:text-sm max-[380px]:px-2 max-[380px]:py-[3px]";

const labelClass =
  "pl-0.5 text-left text-[9px] font-black uppercase tracking-[0.08em] text-cyan-200 md:text-[10px] md:tracking-[0.09em] max-[380px]:text-[8.5px]";

function limpiarTelefono(telefono) {
  return String(telefono || "")
    .replace(/\D/g, "")
    .slice(0, 10);
}

function limpiarDatos(formulario) {
  return {
    nombre: formulario.nombre.trim(),
    empresa: formulario.empresa.trim(),
    cargo: formulario.cargo.trim(),
    correo: formulario.correo.trim(),
    telefono: limpiarTelefono(formulario.telefono),
    tipoProyecto: formulario.tipoProyecto.trim(),
    estado: formulario.estado.trim(),
    mensaje: formulario.mensaje.trim(),
  };
}

export default function Contacto() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [modalEnviado, setModalEnviado] = useState(false);
  const [menuEstados, setMenuEstados] = useState(false);

  const cambiarCampo = (e) => {
    const { name, value } = e.target;

    const nuevoValor = name === "telefono" ? limpiarTelefono(value) : value;

    setFormulario((prev) => ({
      ...prev,
      [name]: nuevoValor,
    }));
  };

  const seleccionarEstado = (estado) => {
    setFormulario((prev) => ({
      ...prev,
      estado,
    }));

    setMenuEstados(false);
  };

  const abrirConfirmacion = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const datosLimpios = limpiarDatos(formulario);

    if (!datosLimpios.estado) {
      alert("Selecciona un estado de la República Mexicana.");
      return;
    }

    setFormulario(datosLimpios);
    setModalConfirmar(true);
  };

  const enviarFormulario = async () => {
    setCargando(true);

    const datosLimpios = limpiarDatos(formulario);

    if (!datosLimpios.estado) {
      alert("Selecciona un estado de la República Mexicana.");
      setModalConfirmar(false);
      setCargando(false);
      return;
    }

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosLimpios),
      });

      const data = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setFormulario(estadoInicial);
      setModalConfirmar(false);
      setModalEnviado(true);
    } catch (error) {
      alert(error.message || "No se pudo enviar el mensaje.");
      setModalConfirmar(false);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <section
        id="contacto"
        className="relative scroll-mt-20 overflow-hidden px-4 py-1.5 md:scroll-mt-24 md:px-8 md:py-3.5 max-[380px]:px-3 max-[380px]:py-1.5"
      >
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-36 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)]" />

        <div className="relative isolate mx-auto grid max-w-7xl items-center gap-1 overflow-hidden rounded-[0.85rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_18%_12%,rgba(125,211,252,0.35),transparent_30%),radial-gradient(circle_at_92%_10%,rgba(14,165,233,0.34),transparent_28%),linear-gradient(135deg,#07182A_0%,#0F2A44_38%,#1E4D6E_72%,#081827_100%)] p-1 text-center text-white shadow-2xl shadow-sky-950/40 md:gap-1.5 md:rounded-[1.2rem] md:p-2 lg:grid-cols-[0.85fr_1.15fr] max-[380px]:gap-1 max-[380px]:p-1">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 size-48 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 size-60 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,rgba(125,211,252,0.08))]" />

          <div className="mt-1.5 mx-auto flex w-full flex-col items-center text-center">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-2 py-[2px] text-center text-[8px] font-black uppercase tracking-[0.15em] text-cyan-200 shadow-sm shadow-black/10 backdrop-blur-md md:text-[8.5px] md:tracking-[0.17em] max-[380px]:px-2 max-[380px]:text-[8px]">
              Contacto
            </p>

            <h2 className="mt-0.5 bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-center text-[15px] font-black leading-tight text-transparent md:mt-0.5 md:text-[23px] max-[380px]:text-[15px]">
              Hablemos de tu proyecto
            </h2>

            <p className="mx-auto mt-0.5 max-w-md text-center text-[13px] leading-5 text-slate-100/95 md:mt-1 md:text-[15px] md:leading-5 max-[380px]:text-[12px] max-[380px]:leading-4">
              Cuéntanos sobre tu organización, el tipo de proyecto y el
              territorio donde buscas fortalecer tu estrategia social.
            </p>
          </div>

          <form
            onSubmit={abrirConfirmacion}
            className="grid gap-[2px] rounded-[0.7rem] border border-cyan-200/15 bg-white/[0.08] p-1 text-left shadow-inner shadow-white/10 backdrop-blur-md md:gap-[2px] md:rounded-[0.9rem] md:p-1.5 max-[380px]:gap-[2px] max-[380px]:p-1"
          >
            <div className="grid gap-[1px]">
              <label htmlFor="nombre" className={labelClass}>
                Nombre completo
              </label>

              <input
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={cambiarCampo}
                placeholder="Escribe tu nombre"
                required
                maxLength={80}
                title="Escribe tu nombre completo"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="empresa" className={labelClass}>
                Nombre de la empresa
              </label>

              <input
                id="empresa"
                name="empresa"
                value={formulario.empresa}
                onChange={cambiarCampo}
                placeholder="Escribe el nombre de tu empresa"
                required
                maxLength={120}
                title="Escribe el nombre de tu empresa"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="cargo" className={labelClass}>
                Cargo que desempeñas
              </label>

              <input
                id="cargo"
                name="cargo"
                value={formulario.cargo}
                onChange={cambiarCampo}
                placeholder="Escribe tu cargo"
                required
                maxLength={80}
                title="Escribe el cargo que desempeñas"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="correo" className={labelClass}>
                Correo electrónico
              </label>

              <input
                id="correo"
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={cambiarCampo}
                placeholder="ejemplo@empresa.com"
                required
                maxLength={120}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                title="Escribe un correo electrónico válido, ejemplo: nombre@empresa.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="telefono" className={labelClass}>
                Teléfono de contacto
              </label>

              <div className="flex overflow-hidden rounded-lg border border-cyan-300/35 bg-white/95 shadow-[0_4px_12px_rgba(8,47,73,0.13)] transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-[0_6px_18px_rgba(14,165,233,0.18)] focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-300/55 md:rounded-xl">
                <span className="flex items-center justify-center border-r border-cyan-300/25 bg-gradient-to-b from-cyan-100 to-sky-100 px-2 text-center text-sm font-black text-[#0F2A44] md:px-2.5 md:text-sm max-[380px]:px-2">
                  +52
                </span>

                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={cambiarCampo}
                  placeholder="10 dígitos"
                  required
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Escribe exactamente los 10 números después del +52"
                  className="min-w-0 flex-1 bg-transparent px-2 py-[3px] text-left text-base font-semibold text-slate-900 outline-none placeholder:text-left placeholder:text-slate-400 md:px-2.5 md:py-[4px] md:text-sm max-[380px]:px-2 max-[380px]:py-[3px]"
                />
              </div>
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="tipoProyecto" className={labelClass}>
                Tipo de proyecto
              </label>

              <input
                id="tipoProyecto"
                name="tipoProyecto"
                value={formulario.tipoProyecto}
                onChange={cambiarCampo}
                placeholder="Escribe el tipo de proyecto"
                required
                maxLength={120}
                title="Escribe el tipo de proyecto"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="estadoBoton" className={labelClass}>
                Estado de la República Mexicana
              </label>

              <div className="text-left">
                <DropdownEstados
                  estado={formulario.estado}
                  abierto={menuEstados}
                  onToggle={() => setMenuEstados((prev) => !prev)}
                  onCerrar={() => setMenuEstados(false)}
                  onSeleccionar={seleccionarEstado}
                />
              </div>
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="mensaje" className={labelClass}>
                Mensaje del contacto
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={cambiarCampo}
                placeholder="Cuéntanos brevemente sobre tu proyecto"
                required
                rows={2}
                maxLength={1000}
                title="Escribe el mensaje del contacto"
                className={`${inputClass} min-h-[54px] resize-none md:min-h-[50px]`}
              />
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="mx-auto mt-1.5 cursor-pointer rounded-full border border-cyan-100/40 bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 px-[18px] py-2 text-center text-[11.5px] font-black uppercase tracking-wide text-[#07182A] shadow-lg shadow-sky-500/20 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:from-white hover:via-cyan-100 hover:to-sky-200 hover:shadow-xl hover:shadow-cyan-300/25 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg md:px-5 md:py-1.5 md:text-[10.5px] max-[380px]:py-1.5 max-[380px]:text-[9px]"
            >
              {cargando ? "Enviando..." : "Enviar solicitud"}
            </button>
          </form>
        </div>
      </section>

      <ModalConfirmarEnvio
        abierto={modalConfirmar}
        cargando={cargando}
        onCancelar={() => setModalConfirmar(false)}
        onConfirmar={enviarFormulario}
      />

      <ModalCorreoEnviado
        abierto={modalEnviado}
        onCerrar={() => setModalEnviado(false)}
      />
    </>
  );
}