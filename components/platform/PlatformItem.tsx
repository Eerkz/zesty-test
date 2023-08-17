import React from "react";
import { PlatformSection } from "../../types/Zesty";
import parser from "html-react-parser";

export default function PlatformItem({
  title,
  description,
}: {
  title: string;
  description: PlatformSection["text_content"];
}) {
  return (
    <li className="bg-neutral-50 shadow-md rounded-2xl p-6 hover:scale-105 transition-all ease-in-out">
      <div>
        <h1 className="font-bold text-xl mb-4">{title}</h1>
        <div className="platform-content">
          {description && parser(description)}
        </div>
      </div>
    </li>
  );
}
