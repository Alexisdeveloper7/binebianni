"use client";

import { useState } from "react";
import ModalConfirmarEnvio from "@/components/ModalConfirmacion";
import ModalCorreoEnviado from "@/components/ModalCorreoEnviado";
import DropdownEstados from "@/components/DropdownEstados";

const imagenFondoCard = "/images/img14.png";

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
  "rounded-lg border border-cyan-300/35 bg-white/95 px-2.5 py-[4px] text-sm font-semibold text-slate-900 shadow-[0_5px_14px_rgba(8,47,73,0.14)] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-sky-300 hover:bg-white hover:shadow-[0_7px_20px_rgba(14,165,233,0.2)] focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-300/60 md:rounded-xl md:px-3 md:py-[6px] md:text-sm max-[380px]:px-2 max-[380px]:py-[3px]";

const labelClass =
  "pl-0.5 text-[8px] font-black uppercase tracking-[0.08em] text-cyan-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] md:text-[8.5px] md:tracking-[0.09em] max-[380px]:text-[7.5px]";

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
        className="relative scroll-mt-20 overflow-hidden px-4 py-2 md:scroll-mt-24 md:px-8 md:py-5 max-[380px]:px-3 max-[380px]:py-2"
      >
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-40 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)]" />

        <div className="relative isolate mx-auto grid max-w-7xl gap-1.5 overflow-hidden rounded-[0.9rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_18%_12%,rgba(125,211,252,0.35),transparent_30%),radial-gradient(circle_at_92%_10%,rgba(14,165,233,0.34),transparent_28%),linear-gradient(135deg,#07182A_0%,#0F2A44_38%,#1E4D6E_72%,#081827_100%)] p-1.5 text-white shadow-2xl shadow-sky-950/40 md:gap-2.5 md:rounded-[1.4rem] md:p-3 lg:grid-cols-[0.85fr_1.15fr] max-[380px]:gap-1.5 max-[380px]:p-1.5">
          <img
            src={imagenFondoCard}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-full object-cover lg:w-[42.5%]"
          />

          <div className="relative z-10 flex flex-col items-start justify-start lg:min-h-full lg:items-center lg:justify-center lg:px-8 lg:text-center">
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-2 py-0.5 text-[8px] font-black uppercase tracking-[0.16em] text-cyan-100 shadow-sm shadow-black/10 backdrop-blur-md md:text-[9px] md:tracking-[0.18em] max-[380px]:px-2 max-[380px]:text-[8px]">
              Contacto
            </p>

            <h2 className="mt-0.5 bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-base font-black leading-tight text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:mt-1 md:text-2xl max-[380px]:text-base">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-1 max-w-md text-xs leading-5 text-slate-100/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:mt-1 md:text-sm md:leading-5 max-[380px]:text-[11px] max-[380px]:leading-4">
              Cuéntanos sobre tu organización, el tipo de proyecto y el
              territorio donde buscas fortalecer tu estrategia social.
            </p>
          </div>

          <form
            onSubmit={abrirConfirmacion}
            className="relative z-10 grid gap-[3px] rounded-[0.75rem] border border-transparent bg-transparent p-1.5 text-left shadow-none backdrop-blur-0 md:gap-1 md:rounded-[1rem] md:p-1.5 lg:border-cyan-200/15 lg:bg-white/[0.08] lg:shadow-inner lg:shadow-white/10 lg:backdrop-blur-md max-[380px]:gap-[3px] max-[380px]:p-1.5"
          >
            <div className="grid gap-[2px]">
              <label htmlFor="nombre" className={labelClass}>
                Escribe tu nombre
              </label>

              <input
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={cambiarCampo}
                placeholder="Nombre"
                required
                maxLength={80}
                title="Escribe tu nombre"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="empresa" className={labelClass}>
                Escribe tu empresa
              </label>

              <input
                id="empresa"
                name="empresa"
                value={formulario.empresa}
                onChange={cambiarCampo}
                placeholder="Empresa"
                required
                maxLength={120}
                title="Escribe tu empresa"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="cargo" className={labelClass}>
                Escribe tu cargo
              </label>

              <input
                id="cargo"
                name="cargo"
                value={formulario.cargo}
                onChange={cambiarCampo}
                placeholder="Cargo"
                required
                maxLength={80}
                title="Escribe tu cargo"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="correo" className={labelClass}>
                Escribe tu correo
              </label>

              <input
                id="correo"
                type="email"
                name="correo"
                value={formulario.correo}
                onChange={cambiarCampo}
                placeholder="Correo electrónico"
                required
                maxLength={120}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                title="Escribe un correo válido, ejemplo: nombre@empresa.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="telefono" className={labelClass}>
                Escribe tu teléfono
              </label>

              <div className="flex overflow-hidden rounded-lg border border-cyan-300/35 bg-white/95 shadow-[0_5px_14px_rgba(8,47,73,0.14)] transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-[0_7px_20px_rgba(14,165,233,0.2)] focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-300/60 md:rounded-xl">
                <span className="flex items-center border-r border-cyan-300/25 bg-gradient-to-b from-cyan-100 to-sky-100 px-2.5 text-sm font-black text-[#0F2A44] md:px-3 md:text-sm max-[380px]:px-2">
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
                  className="min-w-0 flex-1 bg-transparent px-2.5 py-[4px] text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400 md:px-3 md:py-[6px] md:text-sm max-[380px]:px-2 max-[380px]:py-[3px]"
                />
              </div>
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="tipoProyecto" className={labelClass}>
                Escribe el tipo de proyecto
              </label>

              <input
                id="tipoProyecto"
                name="tipoProyecto"
                value={formulario.tipoProyecto}
                onChange={cambiarCampo}
                placeholder="Tipo de proyecto"
                required
                maxLength={120}
                title="Escribe el tipo de proyecto"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="estadoBoton" className={labelClass}>
                Selecciona tu estado
              </label>

              <DropdownEstados
                estado={formulario.estado}
                abierto={menuEstados}
                onToggle={() => setMenuEstados((prev) => !prev)}
                onCerrar={() => setMenuEstados(false)}
                onSeleccionar={seleccionarEstado}
              />
            </div>

            <div className="grid gap-[2px]">
              <label htmlFor="mensaje" className={labelClass}>
                Escribe tu mensaje
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
  title="Escribe tu mensaje"
  className={`${inputClass} min-h-[50px] resize-none py-1.5 md:min-h-[54px]`}
/>
            </div>

            <button
  type="submit"
  disabled={cargando}
  className="mx-auto mt-1.5 w-fit cursor-pointer rounded-full border border-cyan-100/40 bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 px-6 py-2.5 text-center text-[12px] font-black uppercase tracking-wide text-[#07182A] shadow-lg shadow-sky-500/20 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:from-white hover:via-cyan-100 hover:to-sky-200 hover:shadow-xl hover:shadow-cyan-300/25 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg md:px-7 md:py-2 md:text-[11.5px] max-[380px]:px-5 max-[380px]:py-2 max-[380px]:text-[10px]"
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