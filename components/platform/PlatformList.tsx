import React, { useState } from "react";
import { PlatformSection } from "../../types/Zesty";
import PlatformItem from "./PlatformItem";

const PAGE_SIZE = 10;

export default function PlatformList({ data }: { data: PlatformSection[] }) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedData = data.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / PAGE_SIZE))
    );
  };

  return (
    <>
      <div className="mb-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 rounded-full px-4 py-1 text-white disabled:bg-neutral-400"
        >
          Previous
        </button>
        <span className="font-bold mx-4">Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= data.length}
          className="bg-blue-500 rounded-full px-4 py-1 text-white disabled:bg-neutral-400"
        >
          Next
        </button>
      </div>
      <ul className="flex flex-col gap-y-8">
        {paginatedData.map((el, idx) => {
          return (
            <PlatformItem
              key={`platform_section_${idx}`}
              title={el.title}
              description={el.title}
            />
          );
        })}
      </ul>
    </>
  );
}
