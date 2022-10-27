import { useState } from "react";
import Data from "../data.json";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";

export interface CardProperties {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<keyof CardProperties["timeframes"]>("daily");

  const renderBigCard = (card: CardProperties) => {};

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="max-width-[900px] grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center content-center m-auto">
        <BigCard />
        {Data.map((card) => {
          return (
            <SmallCard card={card} selectedTimeframe={selectedTimeframe} />
          );
        })}
      </div>
    </main>
  );
};

export default App;
