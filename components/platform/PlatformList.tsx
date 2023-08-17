import React, { useState, useEffect } from "react";
import { PlatformSection } from "../../types/Zesty";
import PlatformItem from "./PlatformItem";

const PAGE_SIZE = 10;

export default function PlatformList() {
  const [data, setData] = useState<PlatformSection[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
    console.log(data)
  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch(
          "https://www.zesty.io/-/gql/platform_section.json"
        );
        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message);
        }
        const data = await response.json();
        if (data) {
          setData([
            ...(data as PlatformSection[]).sort(
              (a, b) => parseInt(a.sort_order) - parseInt(b.sort_order)
            ),
          ]);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    })();
  }, []);

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
