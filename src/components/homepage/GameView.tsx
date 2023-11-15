"use client";

import ImageCard from "./ImageCard";

export default function GameView() {
  const cards = [
    {
      image: "/images/card1.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card2.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card3.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card4.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card5.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card6.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card7.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/card8.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
  ];

  return (
    <div className="mx-[40px] flex w-full flex-col items-center">
      <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map(({ image, title, subtitle, paragraph }, index) => (
          <ImageCard
            key={index}
            image={image}
            title={title}
            subtitle={subtitle}
            paragraph={paragraph}
          />
        ))}
      </div>
    </div>
  );
}
