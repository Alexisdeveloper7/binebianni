export default function MisionVision() {
  return (
    <section className="relative -mt-px -mb-px overflow-hidden bg-[#e4f5ff] px-4 py-3 md:px-8 md:py-3">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-3 md:grid-cols-2 md:gap-4">
        <div className="group touch-manipulation relative overflow-hidden rounded-[1.25rem] border border-[#86CDFC]/45 bg-[#f4fbff] p-4 shadow-none ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:bg-white hover:shadow-none md:rounded-[1.75rem] md:p-6">
          <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#86CDFC]/25 blur-2xl md:h-36 md:w-36" />
          <div className="absolute -bottom-20 -left-20 h-36 w-36 rounded-full bg-[#30435D]/5 blur-3xl md:h-40 md:w-40" />

          <p className="relative text-[10px] font-black uppercase tracking-[0.2em] text-[#30435D] md:text-xs md:tracking-[0.22em]">
            Nuestra visión
          </p>

          <img
            src="/images/logon.png"
            alt="Bi Ne Bianni"
            className="relative mt-3 h-10 w-10 object-contain md:mt-4 md:h-11 md:w-11"
          />

          <p className="relative mt-3 text-[14px] font-semibold leading-6 text-[#30435D]/85 md:mt-4 md:text-base md:leading-7">
            Ser una firma referente en México en gestión social, sostenibilidad
            y desarrollo territorial, reconocida por generar soluciones
            innovadoras que fortalezcan la relación entre organizaciones,
            comunidades y territorios.
          </p>
        </div>

        <div className="group touch-manipulation relative overflow-hidden rounded-[1.25rem] border border-[#86CDFC]/45 bg-[#f4fbff] p-4 shadow-none ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#86CDFC]/80 hover:bg-white hover:shadow-none md:rounded-[1.75rem] md:p-6">
          <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#86CDFC]/30 blur-2xl md:h-36 md:w-36" />
          <div className="absolute -bottom-20 -left-20 h-36 w-36 rounded-full bg-[#30435D]/5 blur-3xl md:h-40 md:w-40" />

          <p className="relative text-[10px] font-black uppercase tracking-[0.2em] text-[#30435D] md:text-xs md:tracking-[0.22em]">
            Nuestra misión
          </p>

          <img
            src="/images/logon.png"
            alt="Bi Ne Bianni"
            className="relative mt-3 h-10 w-10 object-contain md:mt-4 md:h-11 md:w-11"
          />

          <p className="relative mt-3 text-[14px] font-semibold leading-6 text-[#30435D]/85 md:mt-4 md:text-base md:leading-7">
            Impulsar la sostenibilidad social de proyectos mediante soluciones
            integrales de gestión social, relacionamiento comunitario y creación
            de valor compartido que contribuyan al desarrollo responsable de los
            territorios.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 z-10 mt-5 w-screen -translate-x-1/2 px-2 md:left-auto md:mx-auto md:mt-7 md:w-[75%] md:max-w-3xl md:translate-x-0 md:px-0 lg:max-w-3xl">
        <div className="group relative overflow-hidden rounded-[1rem] border border-[#86CDFC]/45 bg-[#f4fbff] p-1 ring-1 ring-white/80 md:rounded-[1.6rem] md:p-2">
          <div className="relative overflow-hidden rounded-[0.85rem] bg-[#e4f5ff] md:rounded-[1.3rem]">
            <img
              src="/images/foto-3.png"
              alt="Separador visual de sostenibilidad y territorio"
              className="relative z-10 block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.005]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}