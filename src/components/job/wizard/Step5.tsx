"use client";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export default function Step2({ onBack, onNext }: Props) {
  return (
    <>
      <div className="hidden h-auto flex-1 bg-[#A0BF6C] xl:flex"></div>

      <div className="flex flex-[2] flex-col gap-[20px] bg-[#33302C] px-[40px] py-[50px] text-white">
        <div className="flex flex-row justify-end gap-[2px]">
          <i className="fa-solid fa-ellipsis fa-2xl"></i>
          <i className="fa-solid fa-ellipsis fa-2xl"></i>
        </div>

        <div>
          <div className="mt-[30px] text-[20px] font-light text-[#EDF1F3]">
            More Details
          </div>

          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            Estimate the scope of your work
          </h2>
        </div>

        <div className="mt-[10px] flex flex-col justify-between gap-[40px] md:flex-row">
          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3] bg-[#474B35]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl"></i>
              <div className="text-[18px] font-light">Small</div>
            </div>

            <div className="text-[14px] font-light">Quick Tasks</div>
          </div>

          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl"></i>
              <div className="text-[18px] font-light">Medium</div>
            </div>

            <div className="text-center text-[14px] font-light">
              Well defined project
            </div>
          </div>

          <div className="flex h-[142px] w-full flex-col items-center justify-center gap-[5px] rounded-[6px] border-[1px] border-[#EDF1F3]">
            <div className="flex flex-col items-center gap-[20px]">
              <i className="fa-solid fa-grip fa-2xl"></i>
              <div className="text-[18px] font-light">Large</div>
            </div>

            <div className="text-center text-[14px] font-light">
              Long term, complex tasks
            </div>
          </div>
        </div>
        <div className="h-auto">
          <div className="py-[15px] text-[18px] font-normal">
            How long it will take?
          </div>

          <ul className="list-disc pl-[20px]">
            <li className="text-[18px] font-light">3 to 6 months</li>
            <li className="text-[18px] font-light text-[#AFD275]">
              1 to 3 months
            </li>
            <li className="text-[18px] font-light">Less than 1 months</li>
          </ul>
        </div>

        <div className="mb-[30px] ml-[10px]">
          <div className="py-[15px] text-[18px] font-normal">
            What level of experience will it need?
          </div>

          <ul className="list-disc pl-[20px]">
            <li className="text-[18px] font-light">Entry</li>
            <span className="text-[14px] font-light text-[#808080]">
              Looking for someone relatively new to this field
            </span>

            <li className="mt-[10px] text-[18px] font-light">Intermediate</li>
            <span className="text-[14px] font-light text-[#808080]">
              Looking for someone relatively new to this field
            </span>

            <li className="mt-[10px] text-[18px] font-light">Expert</li>
            <span className="text-[14px] font-light text-[#808080]">
              Looking for someone relatively new to this field
            </span>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-[20px] md:flex-row">
          <button
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onBack()}
          >
            Back
          </button>

          <button
            className="h-[44px] w-[210px] rounded-[6px] border-[1px] border-[#AFD275] text-[16px] font-semibold text-[#AFD275] hover:bg-[#AFD275] hover:text-[#EDF1F3] active:bg-[#AFD275]"
            onClick={() => onNext()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
