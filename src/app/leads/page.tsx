"use client";
import { useEffect, useState } from "react";
import CardList from "./card";

export default function Home() {
  const [jsonData, setJsonData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/read");
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV to JSON Conversion</h1>
      <CardList data={jsonData} />
    </div>
  );
}

interface CardData {
  ai_response: string;
  comment: string;
  id: string;
  url: string;
}

const data: CardData[] = [
  {
    ai_response: "",
    comment: "Fiction in general does that for me, honestly ",
    id: "kpwmszs",
    url: "/r/books/comments/1ao3ov2/have_books_ever_ruined_reality_for_you/kpwmszs/",
  },
  {
    ai_response: "",
    comment: "Every single book of samuel beckett",
    id: "kpwli6r",
    url: "/r/books/comments/1ao3ov2/have_books_ever_ruined_reality_for_you/kpwli6r/",
  },
];
