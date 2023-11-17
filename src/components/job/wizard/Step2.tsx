"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export default function Step2({ onBack, onNext }: Props) {
  return (
    <>
      <div className="hidden h-auto flex-1 bg-[#A0BF6C] xl:flex" />

      <section className="flex flex-[2] flex-col gap-[20px] bg-[#33302C] px-[40px] py-[50px] text-white">
        <div className="flex flex-row justify-end gap-[2px]">
          <i className="fa-solid fa-ellipsis fa-2xl" />
          <i className="fa-solid fa-ellipsis fa-2xl" />
        </div>

        <div>
          <div className="mt-[30px] text-[20px] font-light text-[#EDF1F3]">
            Show us your skills
          </div>
          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            what are the main skills required for your work?
          </h2>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="text-[18px] font-light">
            Search or add up to 10 skills
          </p>

          <input
            type="text"
            className="h-[52px] w-full rounded-[6px] border-[1px] border-[#EDF1F3] bg-transparent pl-[10px]"
            placeholder="Search"
          />

          <p className="text-[18px] font-light">
            For the best results, add 3~5 skills
          </p>
        </div>

        <div className="flex flex-col gap-[10px] text-[18px] font-light">
          <div>Popular Skills</div>

          <div className="flex flex-wrap gap-[7px]">
            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Unity
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>

            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  SEO
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>

            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Web Development
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>

            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Google Analytics
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>

            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Business with 1-9 Employees
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>

            <button
              type="button"
              className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]"
            >
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  SEO
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                />
              </div>
            </button>
          </div>
        </div>

        <div className="mb-[10px] flex flex-col gap-[15px] text-[18px] font-light">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[18px] font-light hover:no-underline">
                Full Stack Development Skills
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] border-[#AFD275] px-[10px]">
                  <div className="text-[18px] font-light text-[#AFD275]">
                    2D
                  </div>
                  <i className="fa-solid fa-check fa-lg text-[#AFD275]" />
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">3D</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">Shaders</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">Environment</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">System</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[18px] font-light hover:no-underline">
                Databases
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-[5px]">
                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] border-[#AFD275] px-[10px]">
                  <div className="text-[18px] font-light text-[#AFD275]">
                    2D
                  </div>
                  <i className="fa-solid fa-check fa-lg text-[#AFD275]" />
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">3D</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">Shaders</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">Environment</div>
                </div>

                <div className="flex h-[52px] w-full flex-row items-center justify-between rounded-[6px] border-[1px] px-[10px]">
                  <div className="text-[18px] font-light">System</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
          <button
            type="button"
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onBack()}
          >
            Back
          </button>

          <button
            type="button"
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onNext()}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}
