import React from "react";

function LinkSection({ title, links }) {
  return (
    <div>
      <h1 className="font-bold mb-2">{title}</h1>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer text-black/60">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkSection;
