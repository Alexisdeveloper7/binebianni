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
    <section className="relative -mt-px -mb-px overflow-hidden bg-[#e4f5ff] px-4 py-3 md:px-8 md:py-5">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-5 flex w-full max-w-[420px] items-center justify-center gap-3"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#30435D] md:text-xs md:tracking-[0.24em]">
            Nuestros valores
          </p>

          <h2 className="mx-auto mt-2 max-w-3xl text-[1.55rem] font-black leading-tight text-[#24344b] md:mt-3 md:text-4xl">
            Principios que guían nuestro trabajo
          </h2>
        </div>

        <div className="mt-5 grid gap-3 md:mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {valores.map((valor) => (
            <article
              key={valor.titulo}
              className="group touch-manipulation grid min-h-[92px] grid-cols-[64px_1fr] items-center gap-3 rounded-2xl border border-[#86CDFC]/45 bg-[#f4fbff] px-3 py-3 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:bg-white hover:shadow-none active:scale-[0.98] active:shadow-none md:block md:min-h-[205px] md:rounded-3xl md:p-5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#86CDFC]/35 to-[#B5CDDF]/30 p-2 shadow-none transition-transform duration-300 group-hover:scale-105 md:mx-auto md:h-[84px] md:w-[84px] md:rounded-[1.4rem] md:p-3 lg:h-[90px] lg:w-[90px]">
                <img
                  src={valor.imagen}
                  alt={valor.titulo}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>

              <div className="min-w-0 md:mt-4 md:text-center">
                <h3 className="text-base font-black leading-tight text-[#24344b] md:text-xl">
                  {valor.titulo}
                </h3>

                <p className="mt-1 text-[12px] font-semibold leading-5 text-[#30435D]/85 md:mt-2 md:text-sm md:leading-6">
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