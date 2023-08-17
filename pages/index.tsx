import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { PlatformSection } from "../types/Zesty";
import parser from "html-react-parser";

export default function HomePage() {
  const [data, setData] = useState<PlatformSection[]>([]);

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

  return (
    <MainLayout>
      <ul className="flex flex-col gap-y-8">
        {data.map((el, idx) => {
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
