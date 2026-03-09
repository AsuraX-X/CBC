import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from "react";

function NewCard({ name, value, change }) {
  return (
    <div className="bg-[#eef0f3] aspect-square min-w-40 shrink-0 p-6 rounded-3xl">
      <div>
        <div className="size-8 bg-white mb-4 rounded-full" />
      </div>
      <div className="space-y-2">
        <p className=" text-sm text-black/60">{name}</p>
        <p className="flex items-center font-bold gap-0.5">
          <span
            className={`${change > 0 ? "text-green-700" : "text-red-700"} flex items-center`}
          >
            {change > 0 ? (
              <ArrowUpRight size={20} />
            ) : (
              <ArrowDownRight size={20} />
            )}
            {Math.abs(change)}%
          </span>
        </p>
        <p className="text-sm text-nowrap">{value}</p>
      </div>
    </div>
  );
}

export default NewCard;
