export default function ConsultoriaEspecializada() {
  const items = [
    "Trabajo comunitario",
    "Gestión territorial",
    "Relacionamiento social",
    "Valor compartido",
  ];

  return (
    <section className="relative -mt-px -mb-px overflow-hidden bg-[#e4f5ff] px-4 pt-0 pb-2 md:px-8 md:pt-0 md:pb-4 lg:pt-0 lg:pb-6">
      <div className="relative z-10 mx-auto max-w-full sm:max-w-lg md:max-w-[36rem] lg:max-w-2xl">
        <div className="relative touch-manipulation overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-[#1f2d40] via-[#30435D] to-[#182536] text-white transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] lg:rounded-[1.75rem]">
          <img
            src="/images/1.png"
            alt="Paisaje de energía renovable con sol, viento y sostenibilidad"
            className="block h-auto w-full"
          />

          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#86CDFC]/25 blur-2xl lg:h-44 lg:w-44" />
          <div className="absolute -bottom-20 left-8 h-36 w-36 rounded-full bg-[#86CDFC]/15 blur-2xl lg:h-44 lg:w-44" />

          <div className="relative p-4 md:p-5 lg:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9edaff] md:text-[10px] lg:text-xs lg:tracking-[0.22em]">
              Consultoría especializada
            </p>

            <h2 className="mt-3 text-lg font-black leading-tight sm:text-xl md:text-2xl lg:mt-4 lg:text-3xl">
              Gestión social, sostenibilidad y desarrollo comunitario
            </h2>

            <div className="mt-4 grid gap-2 lg:mt-6 lg:gap-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="touch-manipulation cursor-pointer rounded-xl bg-[#86CDFC]/10 px-3 py-2 text-[13px] font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#86CDFC]/15 active:scale-[0.99] md:px-4 md:py-2.5 md:text-sm lg:rounded-2xl lg:px-4 lg:py-3 lg:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}