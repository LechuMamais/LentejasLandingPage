function About() {
  return (
    <section id="about" className="grid grid-rows-3 grid-cols-2 h-[2250px]">
      <div className="p-[48px] flex flex-col justify-center gap-8 bg-bgCustomGreen">
        <div className="font-bold">
          <p className="text-[20px]">SOMOS</p>
          <p className="text-[102px] leading-none">SOSTENIBLES</p>
        </div>
        <p className="text-[18px] font-Inter font-normal tracking-wide">
          Trabajamos directamente con agricultores locales, que utilizan métodos
          respetuosos con el medio ambiente, para ofrecer productos naturales de
          calidad, sin aditivos ni conservantes artificiales, garantizando
          frescura y sabor para tus comidas.
        </p>
      </div>
      <div className="overflow-hidden w-full h-full">
        <img
          src="/images/campolentejas.jpg"
          alt="Campo de lentejas"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="overflow-hidden w-full h-full">
        <img
          src="/images/lentejas1.jpg"
          alt="Lentejas"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-[48px] flex flex-col justify-center gap-8 bg-bgCustomGreen">
        <div className="font-bold">
          <p className="text-[20px]">SOMOS</p>
          <p className="text-[102px] leading-none">CALIDAD</p>
        </div>
        <div className="text-[18px] font-Inter font-normal tracking-wide">
          <p>Nos obsesionan los detalles.</p>
          <p>
            Por eso nos aseguramos que cada grano, cada semilla, cumpla con
            estrictos controles de calidad, para que todas tus comidas estén al
            nivel que te mereces.
          </p>
        </div>
      </div>
      <div className="col-span-2 p-[200px] flex flex-col justify-center gap-8">
        <p className="text-[102px] font-bold">SOMOS</p>
        <div className="text-[18px] font-Inter font-normal tracking-wide">
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
