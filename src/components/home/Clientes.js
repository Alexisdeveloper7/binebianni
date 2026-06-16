export default function Clientes() {
  const clientes = ["Kino Energía", "Zuma Energía"];

  return (
    <section className="relative -mt-px -mb-px overflow-hidden bg-[#e4f5ff] px-5 pb-5 pt-1 md:px-8">
      <div className="relative z-10 mx-auto max-w-6xl">
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
            Clientes
          </p>

          <h2 className="mx-auto mt-2 max-w-3xl text-[1.45rem] font-black leading-tight text-[#24344b] md:mt-3 md:text-5xl">
            Organizaciones que han confiado en nuestro trabajo
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-[13px] font-semibold leading-5 text-[#30435D]/90 md:mt-3 md:text-base md:leading-7">
            Colaboramos con organizaciones que impulsan proyectos estratégicos
            con enfoque social, territorial y sostenible.
          </p>
        </div>

        <div className="relative mx-auto mt-5 grid max-w-3xl gap-3 sm:grid-cols-2 md:mt-7 md:gap-4">
          {clientes.map((cliente) => (
            <div
              key={cliente}
              className="group touch-manipulation relative overflow-hidden rounded-[1.15rem] border border-[#86CDFC]/50 bg-[#f4fbff] p-4 text-center shadow-[0_8px_18px_rgba(48,67,93,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC] hover:bg-white hover:shadow-[0_10px_22px_rgba(48,67,93,0.08)] active:scale-[0.99] md:rounded-[1.5rem] md:p-6"
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#86CDFC]/18 blur-2xl transition-all duration-300 group-hover:bg-[#86CDFC]/28" />
              <div className="absolute -left-14 bottom-0 h-24 w-24 rounded-full bg-[#86CDFC]/10 blur-2xl" />

              <div className="relative">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#30435D]/75 md:text-[10px] md:tracking-[0.2em]">
                  Cliente estratégico
                </p>

                <p className="mt-1.5 text-base font-black leading-tight text-[#24344b] md:mt-2 md:text-xl">
                  {cliente}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-5 flex w-full max-w-[420px] items-center justify-center gap-3 md:mt-7"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
          <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#86CDFC] shadow-[0_0_18px_rgba(134,205,252,0.75)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#86CDFC]/80 to-[#86CDFC]/40" />
        </div>
      </div>
    </section>
  );
}