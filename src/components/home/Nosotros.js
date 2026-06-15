export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 bg-gradient-to-br from-[#1f2d40] via-[#30435D] to-[#172338] px-4 py-12 text-white md:scroll-mt-24 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl shadow-black/20">
          <img
            src="/images/222.png"
            alt="Relaciones comunitarias y valor compartido"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#172338]/55" />

          <div className="relative flex min-h-[360px] flex-col items-center justify-center px-6 py-8 text-center md:px-8 lg:px-9">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9edaff] md:text-sm">
              Quiénes somos
            </p>

            <h2 className="mt-3 max-w-[520px] text-2xl font-black leading-tight text-white drop-shadow-xl md:text-3xl lg:text-[2.05rem]">
              Construimos relaciones que generan valor compartido
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#86CDFC]" />
          </div>
        </div>

        <div className="max-w-3xl space-y-4 text-base leading-7 text-slate-100 md:text-lg md:leading-8 lg:pl-2">
          <p className="font-semibold text-white">
            Consultoría Social Bi Ne Bianni es una firma mexicana especializada
            en gestión social, sostenibilidad y desarrollo territorial.
          </p>

          <p>
            Constituida formalmente en 2025 y respaldada por una trayectoria
            profesional que se remonta a 2010, nuestra firma acompaña a
            empresas, desarrolladores e instituciones en el diseño e
            implementación de estrategias que fortalecen la relación entre
            proyectos, comunidades y actores clave.
          </p>

          <p>
            Nuestra experiencia combina conocimiento técnico, comprensión
            territorial y una visión estratégica que permite identificar
            oportunidades, gestionar riesgos sociales y construir relaciones de
            confianza que favorecen la sostenibilidad de largo plazo.
          </p>

          <p>
            A lo largo de nuestra trayectoria hemos participado en más de 200
            proyectos desarrollados en 10 estados de la República Mexicana.
          </p>
        </div>
      </div>
    </section>
  );
}