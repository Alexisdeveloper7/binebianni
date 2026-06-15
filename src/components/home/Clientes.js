export default function Clientes() {
  const clientes = ["Kino Energía", "Zuma Energía"];

  return (
    <section className="relative bg-transparent px-4 py-7 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
          Clientes
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight text-[#24344b] md:text-5xl">
          Organizaciones que han confiado en nuestro trabajo
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:mt-7">
          {clientes.map((cliente) => (
            <div
              key={cliente}
              className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#dbe8f3] bg-white/85 p-6 text-xl font-black text-[#24344b] shadow-xl shadow-[#30435D]/8 ring-1 ring-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:bg-white hover:shadow-2xl hover:shadow-[#86CDFC]/20 active:scale-[0.99] md:p-8 md:text-2xl"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#86CDFC]/20 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/35" />

              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#30435D]/70">
                  Cliente estratégico
                </p>

                <p className="mt-2 leading-tight">{cliente}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}