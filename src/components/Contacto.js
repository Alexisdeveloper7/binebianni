"use client";

import { useState } from "react";
import ModalConfirmarEnvio from "@/components/ModalConfirmacion";
import ModalCorreoEnviado from "@/components/ModalCorreoEnviado";

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

function validarCorreo(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(correo).trim());
}

export default function Contacto() {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [cargando, setCargando] = useState(false);
  const [aviso, setAviso] = useState("");
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [modalEnviado, setModalEnviado] = useState(false);

  const cambiarCampo = (e) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "correo") {
      setAviso("");
    }
  };

  const abrirConfirmacion = (e) => {
    e.preventDefault();
    setAviso("");

    const correoLimpio = formulario.correo.trim();

    if (!validarCorreo(correoLimpio)) {
      setAviso(
        "Correo electrónico inválido. Usa un formato como nombre@empresa.com"
      );
      return;
    }

    setFormulario((prev) => ({
      ...prev,
      correo: correoLimpio,
    }));

    setModalConfirmar(true);
  };

  const enviarFormulario = async () => {
    setAviso("");
    setCargando(true);

    const datosLimpios = {
      ...formulario,
      nombre: formulario.nombre.trim(),
      empresa: formulario.empresa.trim(),
      cargo: formulario.cargo.trim(),
      correo: formulario.correo.trim(),
      telefono: formulario.telefono.trim(),
      tipoProyecto: formulario.tipoProyecto.trim(),
      estado: formulario.estado.trim(),
      mensaje: formulario.mensaje.trim(),
    };

    if (!validarCorreo(datosLimpios.correo)) {
      setAviso(
        "Correo electrónico inválido. Usa un formato como nombre@empresa.com"
      );
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
      setAviso(error.message || "No se pudo enviar el mensaje.");
      setModalConfirmar(false);
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      <section
        id="contacto"
        className="scroll-mt-20 px-4 py-12 md:scroll-mt-24 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-7 rounded-[1.5rem] bg-[#30435D] p-5 text-white md:rounded-[2rem] md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#86CDFC]">
              Contacto
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Hablemos de tu proyecto
            </h2>

            <p className="mt-4 leading-7 text-slate-100 md:text-lg md:leading-8">
              Cuéntanos sobre tu organización, el tipo de proyecto y el
              territorio donde buscas fortalecer tu estrategia social.
            </p>
          </div>

          <form onSubmit={abrirConfirmacion} className="grid gap-3">
            <input
              name="nombre"
              value={formulario.nombre}
              onChange={cambiarCampo}
              placeholder="Nombre"
              required
              maxLength={80}
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <input
              name="empresa"
              value={formulario.empresa}
              onChange={cambiarCampo}
              placeholder="Empresa"
              required
              maxLength={120}
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <input
              name="cargo"
              value={formulario.cargo}
              onChange={cambiarCampo}
              placeholder="Cargo"
              required
              maxLength={80}
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <input
              type="email"
              name="correo"
              value={formulario.correo}
              onChange={cambiarCampo}
              placeholder="Correo electrónico"
              required
              maxLength={120}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
              title="Escribe un correo válido, ejemplo: nombre@empresa.com"
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <input
              type="tel"
              name="telefono"
              value={formulario.telefono}
              onChange={cambiarCampo}
              placeholder="Teléfono"
              required
              maxLength={20}
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <input
              name="tipoProyecto"
              value={formulario.tipoProyecto}
              onChange={cambiarCampo}
              placeholder="Tipo de proyecto"
              required
              maxLength={120}
              className="rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <select
              name="estado"
              value={formulario.estado}
              onChange={cambiarCampo}
              required
              className="cursor-pointer rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            >
              <option value="">Selecciona un estado</option>

              {estadosMexico.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>

            <textarea
              name="mensaje"
              value={formulario.mensaje}
              onChange={cambiarCampo}
              placeholder="Mensaje"
              rows={4}
              required
              maxLength={1000}
              className="resize-none rounded-2xl border border-white/20 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all duration-300 focus:border-[#86CDFC] focus:ring-2 focus:ring-[#86CDFC]/60"
            />

            <button
              type="submit"
              disabled={cargando}
              className="cursor-pointer rounded-full bg-[#86CDFC] px-6 py-3.5 text-xs font-black uppercase tracking-wide text-[#30435D] outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-black/20 focus-visible:ring-2 focus-visible:ring-[#86CDFC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#30435D] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-[#86CDFC] disabled:hover:shadow-none"
            >
              {cargando ? "Enviando..." : "Enviar solicitud"}
            </button>

            {aviso && (
              <p className="rounded-2xl bg-red-500/20 px-4 py-3 text-sm font-semibold text-white">
                {aviso}
              </p>
            )}
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