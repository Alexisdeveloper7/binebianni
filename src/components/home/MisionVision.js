export default function MisionVision() {
  return (
    <section className="overflow-hidden px-4 py-12 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        <div className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#d8e8f7] bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf7ff] p-5 shadow-xl shadow-[#30435D]/7 ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/70 md:rounded-[2rem] md:p-8">
          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#86CDFC]/25 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#30435D]/5 blur-3xl" />

          <p className="relative text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Nuestra visión
          </p>

          <img
            src="/images/logon.png"
            alt="Bi Ne Bianni"
            className="relative mt-4 h-12 w-12 object-contain"
          />

          <p className="relative mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
            Ser una firma referente en México en gestión social, sostenibilidad
            y desarrollo territorial, reconocida por generar soluciones
            innovadoras que fortalezcan la relación entre organizaciones,
            comunidades y territorios.
          </p>
        </div>

        <div className="group touch-manipulation relative overflow-hidden rounded-[1.5rem] border border-[#c8eaff] bg-gradient-to-br from-[#e9f8ff] via-white to-[#f3fbff] p-5 shadow-xl shadow-[#86CDFC]/12 ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 md:rounded-[2rem] md:p-8">
          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#86CDFC]/30 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#30435D]/5 blur-3xl" />

          <p className="relative text-xs font-black uppercase tracking-[0.22em] text-[#30435D]">
            Nuestra misión
          </p>

          <img
            src="/images/logon.png"
            alt="Bi Ne Bianni"
            className="relative mt-4 h-12 w-12 object-contain"
          />

          <p className="relative mt-4 leading-7 text-slate-700 md:text-lg md:leading-8">
            Impulsar la sostenibilidad social de proyectos mediante soluciones
            integrales de gestión social, relacionamiento comunitario y creación
            de valor compartido que contribuyan al desarrollo responsable de los
            territorios.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 mt-7 w-screen -translate-x-1/2 px-2 md:left-auto md:mx-auto md:mt-8 md:w-full md:max-w-7xl md:translate-x-0 md:px-0">
        <div className="group relative overflow-hidden rounded-[1.25rem] border border-[#dbe8f3] bg-gradient-to-br from-white via-[#f7fbff] to-[#e9f8ff] p-1 shadow-2xl shadow-[#30435D]/12 ring-1 ring-white/80 md:rounded-[2.25rem] md:p-3">
          <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#86CDFC]/25 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#30435D]/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[1rem] bg-[#f7fbff] md:rounded-[1.85rem]">
            <img
              src="/images/foto-3.png"
              alt="Separador visual de sostenibilidad y territorio"
              className="relative z-10 block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.005]"
            />

            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#30435D]/10 via-transparent to-white/5" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-[#30435D]/14 to-transparent md:h-24 md:from-[#30435D]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}