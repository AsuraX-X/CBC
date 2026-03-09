import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function MarketStatsCard({ title, image, value, change }) {
  return (
    <div className="bg-[#eef0f3] space-y-6 w-fit p-4 rounded-2xl">
      <div>
        <p className="text-sm">{title}</p>
        <p className="flex text-xs items-center font-bold gap-0.5">
          {value}
          <span
            className={`${change > 0 ? "text-green-700" : "text-red-700"} flex items-center`}
          >
            {change > 0 ? <ArrowUpRight size={18}/> : <ArrowDownRight size={18}/>}
            {Math.abs(change)}%
          </span>
        </p>
      </div>
      <div className="w-60 h-15">
        <img src={image} width={240} height={60} />
      </div>
    </div>
  );
}

export default MarketStatsCard;
