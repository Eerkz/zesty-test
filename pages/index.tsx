import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import PlatformList from "../components/platform/PlatformList";
import { PlatformSection } from "../types/Zesty";

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
      <PlatformList data={data} />
    </MainLayout>
  );
}
