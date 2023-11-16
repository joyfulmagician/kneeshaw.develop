"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionList() {
  const faqs = [
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
    {
      question: "What is game development",
      answer: `Game development is the process of creating video games. It
              involves designing the game concept, creating the graphics and
              sound effects, programming the game mechanics, and testing the
              game to ensure it is fun and playable.`,
    },
  ];
  return (
    <>
      {faqs.map((f, index) => (
        <Accordion
          key={index}
          type="single"
          collapsible
          className="rounded-[10px] bg-[#312C29]"
        >
          <AccordionItem
            value="item-1"
            className="rounded-[10px]  border-[#312C29]"
          >
            <AccordionTrigger className="h-[72px] pr-[20px] text-[18px] font-light hover:no-underline">
              <div className="flex flex-row items-center justify-center">
                <i className="fa-regular fa-circle-dot px-[20px] text-[#E7717D]"></i>
                <p className="text-[18px] font-semibold text-[#EDF1F3]">
                  {f.question}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-[5px]">
              <div className="ml-[17px] flex w-full flex-row items-center justify-between gap-[22px] rounded-[6px] px-[10px] py-[10px] pr-[50px]">
                <img src="/images/home/line.png" alt="line" />
                <div className="text-[15px] font-light text-[#EDF1F3]">
                  {f.answer}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
