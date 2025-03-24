function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 auto-rows-[400px] md:auto-rows-[minmax(750px,_1fr)] h-auto"
    >
      {/* Bloque SOSTENIBLES - siempre primera fila */}
      <div className="p-[48px] flex flex-col justify-center gap-4 md:gap-8 bg-bgCustomGreen order-1 md:order-1">
        <div className="font-bold">
          <p className="text-[11px] md:text-[20px]">SOMOS</p>
          <p className="text-[40px] md:text-[102px] leading-none">
            SOSTENIBLES
          </p>
        </div>
        <p className="text-[13px] md:text-[18px] font-Inter font-normal tracking-wide">
          Trabajamos directamente con agricultores locales, que utilizan métodos
          respetuosos con el medio ambiente, para ofrecer productos naturales de
          calidad, sin aditivos ni conservantes artificiales, garantizando
          frescura y sabor para tus comidas.
        </p>
      </div>

      {/* Imagen Campo de lentejas - segunda en móvil, primera columna segunda fila en desktop */}
      <div className="overflow-hidden w-full h-full order-2 md:order-2">
        <img
          src="/images/campolentejas.jpg"
          alt="Campo de lentejas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Imagen Lentejas - tercera en móvil, segunda columna primera fila en desktop */}
      <div className="overflow-hidden w-full h-full order-4 md:order-3">
        <img
          src="/images/lentejas1.jpg"
          alt="Lentejas"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bloque CALIDAD - cuarta en móvil, segunda columna segunda fila en desktop */}
      <div className="p-[48px] flex flex-col justify-center gap-4 md:gap-8 bg-bgCustomGreen order-3 md:order-4">
        <div className="font-bold">
          <p className="text-[11px] md:text-[20px]">SOMOS</p>
          <p className="text-[40px] md:text-[102px] leading-none">CALIDAD</p>
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

      {/* Bloque final - quinta en móvil, full width en desktop */}
      <div className="col-span-1 md:col-span-2 p-[48px] md:p-[200px] flex flex-col justify-center gap-4 md:gap-8 order-5 md:order-5">
        <p className="text-[40px] md:text-[102px] leading-none font-bold">
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
