function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 auto-rows-[400px] lg:auto-rows-[minmax(750px,_1fr)] h-auto bg-bgCustom"
    >
      <div className="p-[48px] flex flex-col justify-center gap-4 lg:gap-8 bg-bgCustomGreen order-1 lg:order-1">
        <div className="font-bold">
          <p className="text-[11px] md:text-[20px]">SOMOS</p>
          <p className="text-[40px] md:text-[68px] leading-none lg:hidden xl:block 2xl:text-[92px]">
            SOSTENIBLES
          </p>
          <p className="text-[68px] leading-none hidden lg:block xl:hidden">
            SOSTE
            <br />
            NIBLES
          </p>
        </div>
        <p className="text-[13px] md:text-[18px] font-Inter font-normal tracking-wide">
          Trabajamos directamente con agricultores locales, que utilizan métodos
          respetuosos con el medio ambiente, para ofrecer productos naturales de
          calidad, sin aditivos ni conservantes artificiales, garantizando
          frescura y sabor para tus comidas.
        </p>
      </div>

      <div className="overflow-hidden w-full h-full order-2 lg:order-2">
        <img
          src="/images/campolentejas.jpg"
          alt="Campo de lentejas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="overflow-hidden w-full h-full order-4 lg:order-3">
        <img
          src="/images/lentejas1.jpg"
          alt="Lentejas"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-[48px] flex flex-col justify-center gap-4 lg:gap-8 bg-bgCustomGreen order-3 lg:order-4">
        <div className="font-bold">
          <p className="text-[11px] md:text-[20px]">SOMOS</p>
          <p className="text-[40px]  md:text-[68px] 2xl:text-[92px] leading-none">
            CALIDAD
          </p>
        </div>
        <div className="text-[13px] md:text-[18px] font-Inter font-normal tracking-wide">
          <p>Nos obsesionan los detalles.</p>
          <p>
            Por eso nos aseguramos que cada grano, cada semilla, cumpla con
            estrictos controles de calidad, para que todas tus comidas estén al
            nivel que te mereces.
          </p>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 p-[48px] lg:p-[200px] flex flex-col justify-center gap-4 lg:gap-8 order-5 lg:order-5">
        <p className="text-[40px]  md:text-[68px] lg:text-[92px] 2lg:text-[102px] leading-none font-bold">
          SOMOS
        </p>
        <div className="text-[13px] md:text-[18px] font-Inter font-normal tracking-wide">
          <p>
            Una empresa familiar fundada en 2018 con el objetivo de llevar lo
            mejor del campo a tu mesa.
          </p>
          <p>
            Producir y comercializar productos de primera calidad es nuestro
            ADN.
          </p>
          <p>Nutrirte nuestro fin.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
