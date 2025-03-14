import { FaStar } from "react-icons/fa6";

function OpinionCard({ opinion }) {
  return (
    <div className="flex flex-col bg-bgCustomGreen p-[48px] rounded-[16px] border-none shadow-[0px_0px_24px_0px_rgba(0,0,0,0.5)] w-[320px] h-[480px] text-center items-center">
      <div className="flex flex-col gap-[16px]">
        <img
          className="rounded-full w-[120px] h-[120px] object-cover shadow-[0px_0px_12px_0px_rgba(0,0,0,0.5)]"
          src={opinion.image.url}
          alt={opinion.image.alt}
        />
        <h3 className="text-primary">{opinion.name}</h3>
        <div className="flex justify-center scale-[3] gap-[2px]">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <FaStar
                key={i}
                className={`w-1.5 h-1.5 ${
                  i < opinion.rating ? "text-yellowStar" : "text-gray"
                }`}
              />
            ))}
        </div>
      </div>
      <p className="text-primary line-clamp-5 w-[200px] pt-[32px] text-[18px]">
        {opinion.comment}
      </p>
    </div>
  );
}

export default OpinionCard;
