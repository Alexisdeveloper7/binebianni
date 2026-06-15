export default function ConsultoriaEspecializada() {
  const items = [
    "Trabajo comunitario",
    "Gestión territorial",
    "Relacionamiento social",
    "Valor compartido",
  ];

  return (
    <section className="px-4 py-6 md:px-8 md:py-10 bg-white">
      <div className="mx-auto max-w-2xl">
        <div className="touch-manipulation rounded-[1.75rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-[#30435D]/10 ring-1 ring-[#86CDFC]/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[#30435D]/15 active:scale-[0.99] md:p-6">
          <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#1f2d40] via-[#30435D] to-[#182536] text-white shadow-inner">
            <img
              src="/images/1.png"
              alt="Paisaje de energía renovable con sol, viento y sostenibilidad"
              className="block h-auto w-full lg:hidden"
            />

            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#86CDFC]/20 blur-2xl" />
            <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

            <div className="relative p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9edaff]">
                Consultoría especializada
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight md:text-3xl">
                Gestión social, sostenibilidad y desarrollo comunitario
              </h2>

              <div className="mt-6 grid gap-3">
                {items.map((item) => (
                  <div
                    key={item}
                    className="touch-manipulation rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold shadow-sm shadow-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#86CDFC]/45 hover:bg-white/15 active:scale-[0.99] active:border-[#86CDFC]/45 active:bg-white/15"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}