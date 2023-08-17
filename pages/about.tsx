import React, { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import parse from "html-react-parser";

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<string>("");

  useEffect(() => {
    (async function fetchAboutData() {
      try {
        const response = await fetch(
          "https://www.zesty.io/-/instant/7-e93178-vqvclg.json"
        );
        if (!response.ok) {
          const { message } = await response.json();
          throw new Error(message || "Something happened while fetching data.");
        }
        const data = await response.json();
        if (data?.data?.[0]?.content?.page_content) {
          setAboutData(data.data[0].content.page_content);
        }
      } catch (error: any) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <div>{parse(aboutData)}</div>
    </MainLayout>
  );
}
