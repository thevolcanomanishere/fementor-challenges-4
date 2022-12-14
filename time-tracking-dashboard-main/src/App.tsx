import React, { useState } from 'react';
import Data from '../data.json';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<keyof CardProperties['timeframes']>('daily');

  const renderBigCard = (card: CardProperties) => {};

  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <div className="max-width-[900px] grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center content-center m-auto">
        <BigCard />
        {Data.map((card, index) => (
          <SmallCard
            key={index}
            card={card}
            selectedTimeframe={selectedTimeframe}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
