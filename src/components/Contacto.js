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
  "rounded-lg border border-cyan-300/35 bg-white/95 px-2 py-[4px] text-[16px] leading-[1.15] font-semibold text-slate-900 shadow-[0_4px_12px_rgba(8,47,73,0.13)] outline-none transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-[0_6px_16px_rgba(14,165,233,0.18)] focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-300/55 md:rounded-xl md:px-3 md:py-[6px] md:text-sm max-[380px]:px-1.5 max-[380px]:py-[3px] max-[380px]:text-[16px]";

const labelClass =
  "pl-0.5 text-[7px] font-black uppercase tracking-[0.07em] text-cyan-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] md:text-[8.5px] md:tracking-[0.09em] max-[380px]:text-[6.8px]";

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
        className="relative isolate -mt-px scroll-mt-20 overflow-hidden bg-[#e4f5ff] px-4 pt-0 pb-2 sm:px-5 sm:pb-9 md:scroll-mt-24 md:px-8 md:pt-1 md:pb-7 max-[380px]:px-3 max-[380px]:pt-0"
      >
        <div className="relative isolate mx-auto grid w-full max-w-[430px] gap-1 overflow-hidden rounded-[0.85rem] border border-white/15 bg-[#0F2A44] p-1.5 text-white shadow-none sm:max-w-5xl sm:grid-cols-[0.82fr_1.18fr] sm:gap-2 sm:p-2 md:gap-2.5 md:rounded-[1.4rem] md:p-3 lg:max-w-7xl lg:grid-cols-[0.85fr_1.15fr] max-[380px]:gap-1 max-[380px]:p-1.5">
          <img
            src={imagenFondoCard}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-full object-cover sm:w-[41%] lg:w-[42.5%]"
          />

          <div className="absolute inset-0 z-0 bg-[#0F2A44]/55 sm:w-[41%] lg:w-[42.5%]" />

          <div className="relative z-10 flex flex-col items-center justify-center px-2 py-1 text-center sm:min-h-full sm:px-4 md:px-6 lg:px-8">
            <p className="inline-flex rounded-full border border-white/20 bg-[#0F2A44]/70 px-2 py-[2px] text-[7px] font-black uppercase tracking-[0.14em] text-white shadow-sm shadow-black/10 backdrop-blur-md md:text-[9px] md:tracking-[0.18em] max-[380px]:text-[6.8px]">
              Contacto
            </p>

            <h2 className="mt-0.5 text-[15px] font-black leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:mt-1 md:text-2xl max-[380px]:text-sm">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-0.5 max-w-[290px] text-[10.5px] leading-4 text-slate-100/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:mt-1 md:max-w-md md:text-sm md:leading-5 max-[380px]:text-[10px] max-[380px]:leading-[15px]">
              Cuéntanos sobre tu organización, el tipo de proyecto y el
              territorio donde buscas fortalecer tu estrategia social.
            </p>
          </div>

          <form
            onSubmit={abrirConfirmacion}
            className="relative z-10 mx-auto grid w-full max-w-[430px] gap-[2px] rounded-[0.7rem] border border-transparent bg-transparent p-1 text-left shadow-none backdrop-blur-0 sm:max-w-none sm:gap-1 sm:p-1.5 md:rounded-[1rem] lg:border-white/10 lg:bg-[#0F2A44]/35 lg:shadow-inner lg:shadow-white/10 lg:backdrop-blur-md max-[380px]:gap-[2px] max-[380px]:p-1"
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
                required
                maxLength={80}
                title="Escribe tu nombre completo"
                autoComplete="name"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="empresa" className={labelClass}>
                Empresa
              </label>

              <input
                id="empresa"
                name="empresa"
                value={formulario.empresa}
                onChange={cambiarCampo}
                required
                maxLength={120}
                title="Escribe el nombre de tu empresa"
                autoComplete="organization"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="cargo" className={labelClass}>
                Cargo
              </label>

              <input
                id="cargo"
                name="cargo"
                value={formulario.cargo}
                onChange={cambiarCampo}
                required
                maxLength={80}
                title="Escribe tu cargo"
                autoComplete="organization-title"
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
                required
                maxLength={120}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                title="Escribe un correo válido, ejemplo: nombre@empresa.com"
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="telefono" className={labelClass}>
                Teléfono
              </label>

              <div className="flex overflow-hidden rounded-lg border border-cyan-300/35 bg-white/95 shadow-[0_4px_12px_rgba(8,47,73,0.13)] transition-all duration-300 hover:border-sky-300 hover:bg-white hover:shadow-[0_6px_16px_rgba(14,165,233,0.18)] focus-within:border-sky-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-300/55 md:rounded-xl">
                <span className="flex items-center border-r border-cyan-300/25 bg-[#dff4ff] px-2 text-[12px] font-black text-[#0F2A44] md:px-3 md:text-sm max-[380px]:px-1.5 max-[380px]:text-[11.5px]">
                  +52
                </span>

                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  value={formulario.telefono}
                  onChange={cambiarCampo}
                  required
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Escribe exactamente los 10 números después del +52"
                  className="min-w-0 flex-1 bg-transparent px-2 py-[4px] text-[16px] leading-[1.15] font-semibold text-slate-900 outline-none md:px-3 md:py-[6px] md:text-sm max-[380px]:px-1.5 max-[380px]:py-[3px] max-[380px]:text-[16px]"
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
                required
                maxLength={120}
                title="Escribe el tipo de proyecto"
                className={inputClass}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="estadoBoton" className={labelClass}>
                Estado
              </label>

              <DropdownEstados
                estado={formulario.estado}
                abierto={menuEstados}
                onToggle={() => setMenuEstados((prev) => !prev)}
                onCerrar={() => setMenuEstados(false)}
                onSeleccionar={seleccionarEstado}
              />
            </div>

            <div className="grid gap-[1px]">
              <label htmlFor="mensaje" className={labelClass}>
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={cambiarCampo}
                required
                rows={2}
                maxLength={1000}
                title="Escribe tu mensaje"
                className={`${inputClass} min-h-[42px] resize-none py-1 md:min-h-[54px]`}
              />
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="mx-auto mt-2 mb-0.5 w-fit cursor-pointer rounded-full border border-cyan-100/40 bg-[#86CDFC] px-5 py-2 text-center text-[10.5px] font-black uppercase tracking-wide text-[#07182A] shadow-lg shadow-sky-500/20 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b9e6ff] hover:shadow-xl hover:shadow-cyan-300/25 focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2A44] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-lg md:px-7 md:py-2 md:text-[11.5px] max-[380px]:px-4 max-[380px]:py-1.5 max-[380px]:text-[9.5px]"
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