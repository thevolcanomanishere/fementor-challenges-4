import React from "react";
import { CardProperties } from "../App";

const cardBgColor = "#1E2048";

const SmallCard = ({
  card,
  selectedTimeframe,
}: {
  card: CardProperties;
  selectedTimeframe: keyof CardProperties["timeframes"];
}) => {
  let backgroundColor;
  switch (card.title) {
    case "Work":
      backgroundColor = "bg-orange-500";
      break;
    case "Play":
      backgroundColor = "bg-blue-500";
      break;
    case "Study":
      backgroundColor = "bg-yellow-500";
      break;
    case "Exercise":
      backgroundColor = "bg-green-500";
      break;
    case "Social":
      backgroundColor = "bg-purple-500";
      break;
    case "Self Care":
      backgroundColor = "bg-pink-500";
      break;
  }

  const renderPrevious = (card: CardProperties) => {
    if (selectedTimeframe === "daily") {
      return <p>Yesterday - {card.timeframes.daily.previous}hrs</p>;
    }
    if (selectedTimeframe === "weekly") {
      return (
        <p>
          Last Week - {card.timeframes.weekly.previous}
          hrs
        </p>
      );
    }
    if (selectedTimeframe === "monthly") {
      return (
        <p>
          Last Month - {card.timeframes.monthly.previous}
          hrs
        </p>
      );
    }
  };

  return (
    <div
      className={`relative w-56 h-56 ${backgroundColor} rounded-xl`}
      key={card.title}
    >
      <div
        className={`h-[80%] bottom-0 absolute w-full bg-[#1E2048]  rounded-xl`}
      ></div>
      <div
        className={`flex flex-col absolute w-full h-[80%] rounded-xl bottom-0 p-8 text-white`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-row justify-between">
            <h1>{card.title}</h1>
            <button className="text-2xl ">...</button>
          </div>
        </div>
        <h2 className="text-5xl text-white">
          {card.timeframes[selectedTimeframe].current}hrs
        </h2>
        <div className="">{renderPrevious(card)}</div>
      </div>
    </div>
  );
};

export default SmallCard;
