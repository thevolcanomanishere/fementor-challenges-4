import React from 'react';
import Icon from './Icon';

function SmallCard({
  card,
  selectedTimeframe
}: {
  card: CardProperties;
  selectedTimeframe: keyof CardProperties['timeframes'];
}) {
  let backgroundColor;
  switch (card.title) {
    case 'Work':
      backgroundColor = 'bg-orange-500';
      break;
    case 'Play':
      backgroundColor = 'bg-blue-500';
      break;
    case 'Study':
      backgroundColor = 'bg-pink-500';
      break;
    case 'Exercise':
      backgroundColor = 'bg-green-500';
      break;
    case 'Social':
      backgroundColor = 'bg-purple-500';
      break;
    case 'Self Care':
      backgroundColor = 'bg-yellow-500';
      break;
    default:
      backgroundColor = 'bg-gray-500';
  }

  const renderPreviousTime = (card: CardProperties) => {
    let text;
    if (selectedTimeframe === 'daily') {
      text = `Yesterday - ${card.timeframes.daily.previous}hrs`;
    }
    if (selectedTimeframe === 'weekly') {
      text = `Last Week - ${card.timeframes.weekly.previous}hrs`;
    }
    if (selectedTimeframe === 'monthly') {
      text = `Last Month - ${card.timeframes.monthly.previous}hrs`;
    }
    return <p className="text-gray-300">{text}</p>;
  };

  return (
    <div
      className={`flex flex-col relative w-56 h-56 ${backgroundColor} rounded-xl`}
      key={card.title}
    >
      <div className="mr-2 self-end">
        <Icon name={card.title} styling="brightness-75" />
      </div>
      <div
        className={`h-[80%] bottom-0 absolute w-full bg-[#1E2048] rounded-xl`}
      ></div>
      <div
        className={`flex flex-col absolute w-full h-[80%] rounded-xl bottom-0 p-8 text-white`}
      >
        <div className="flex flex-col justify-between mb-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg">{card.title}</h1>
            <span className="align-text-top">...</span>
          </div>
        </div>
        <h2 className="text-5xl text-white mb-2">
          {card.timeframes[selectedTimeframe].current}hrs
        </h2>
        <div className="">{renderPreviousTime(card)}</div>
      </div>
    </div>
  );
}

export default SmallCard;
