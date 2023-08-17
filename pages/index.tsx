import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { PlatformSection } from "../types/Zesty";
import parser from "html-react-parser";

const PAGE_SIZE = 10;

export default function HomePage() {
  const [data, setData] = useState<PlatformSection[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    <MainLayout>
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
            <li
              key={`platform_section_${idx}`}
              className="bg-neutral-50 shadow-md rounded-2xl p-6 hover:scale-105 transition-all ease-in-out"
            >
              <div>
                <h1 className="font-bold text-xl mb-4">{el.title}</h1>
                <div className="platform-content">
                  {el.text_content && parser(el.text_content)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}
