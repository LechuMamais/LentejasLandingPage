import opinions from "../data/opinions";
import OpinionCard from "./OpinionCard";

function Opinions() {
  return (
    <section
      id="opinions"
      className="flex flex-col bg-[url('/images/Opinions_background.png')] h-[1900px] px-[120px] pt-[180px]"
    >
      <div className="flex flex-col h-[50%] gap-[160px]">
        <h2 className="text-[36px] font-semibold text-primary text-start">
          Expertos nos recomiendan
        </h2>

        <div className="flex flex-row justify-center gap-[120px]">
          {opinions?.length > 0 &&
            opinions.map((opinion, index) => (
              <OpinionCard key={index} opinion={opinion} />
            ))}
        </div>
      </div>

      <div className="flex items-center justify-center h-[50%]">
        <p className="text-[48px] text-primary font-medium">
          ¡Buscanos en tu supermercado!
        </p>
      </div>
    </section>
  );
}

export default Opinions;
