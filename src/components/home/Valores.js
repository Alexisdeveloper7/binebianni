const valores = [
  {
    titulo: "Integridad",
    texto: "Actuamos con ética, transparencia y responsabilidad.",
    imagen: "/images/principios/pri1.png",
  },
  {
    titulo: "Respeto",
    texto: "Reconocemos la diversidad cultural y social de los territorios.",
    imagen: "/images/principios/pri2.png",
  },
  {
    titulo: "Diálogo",
    texto: "Promovemos procesos participativos y constructivos.",
    imagen: "/images/principios/pri3.png",
  },
  {
    titulo: "Compromiso",
    texto: "Trabajamos orientados a resultados sostenibles.",
    imagen: "/images/principios/pri4.png",
  },
  {
    titulo: "Innovación Social",
    texto: "Desarrollamos soluciones adaptadas a cada contexto.",
    imagen: "/images/principios/pri5.png",
  },
  {
    titulo: "Sostenibilidad",
    texto: "Generamos valor compartido para las organizaciones y las comunidades.",
    imagen: "/images/principios/pri6.png",
  },
];

export default function Valores() {
  return (
    <section className="bg-gradient-to-b from-[#f7fbff] via-[#f3f8fd] to-[#f8fbff] px-4 py-7 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
          Nuestros valores
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#24344b] md:text-5xl">
          Principios que guían nuestro trabajo
        </h2>

        <div className="mt-5 grid gap-3 md:mt-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {valores.map((valor) => (
            <article
              key={valor.titulo}
              className="group touch-manipulation grid min-h-[96px] grid-cols-[68px_1fr] items-center gap-3 rounded-2xl border border-[#dbe8f3] bg-white/90 px-3 py-3 shadow-lg shadow-[#30435D]/5 ring-1 ring-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 hover:shadow-xl hover:shadow-[#86CDFC]/20 active:scale-[0.98] md:block md:min-h-[230px] md:rounded-3xl md:p-6"
            >
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#86CDFC]/35 to-[#B5CDDF]/30 p-2 shadow-md shadow-[#86CDFC]/20 transition-transform duration-300 group-hover:scale-105 md:mx-auto md:h-[92px] md:w-[92px] md:rounded-[1.5rem] md:p-3 lg:h-[98px] lg:w-[98px]">
                <img
                  src={valor.imagen}
                  alt={valor.titulo}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>

              <div className="min-w-0 md:mt-5 md:text-center">
                <h3 className="text-base font-black leading-tight text-[#24344b] md:text-xl">
                  {valor.titulo}
                </h3>

                <p className="mt-1.5 text-[12px] leading-5 text-slate-600 md:mt-3 md:text-sm md:leading-6">
                  {valor.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}