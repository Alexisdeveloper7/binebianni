import Inicio from "@/components/home/Inicio";
import ConsultoriaEspecializada from "@/components/home/ConsultoriaEspecializada";
import Experiencia from "@/components/home/Experiencia";
import Nosotros from "@/components/home/Nosotros";
import MisionVision from "@/components/home/MisionVision";
import Valores from "@/components/home/Valores";
import Servicios from "@/components/home/Servicios";
import Clientes from "@/components/home/Clientes";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8fbff] text-slate-800 selection:bg-[#86CDFC]/35 selection:text-[#172338]">
      <Inicio />
      <ConsultoriaEspecializada />
      <Experiencia />
      <Nosotros />
      <MisionVision />
      <Valores />
      <Servicios />
      <Clientes />
      <Contacto />
    </main>
  );
}