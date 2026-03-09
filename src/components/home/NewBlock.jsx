import React from "react";

function NewBlock({ image, title, description }) {
  return (
    <div className="space-y-6 group">
      <div className="max-h-50 overflow-hidden rounded-4xl">
        <img src={image} alt={title} />
      </div>
      <div className="space-y-4">
        <h2 className="text-[32px]/[36px] group-hover:underline">{title}</h2>
        <p className="line-clamp-3 text-black/60">{description}</p>
      </div>
    </div>
  );
}

export default NewBlock;
