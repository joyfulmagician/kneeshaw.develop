"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export default function Step2({ onBack, onNext }: Props) {
  return (
    <>
      <div className="hidden h-auto flex-1 bg-[#A0BF6C] lg:flex"></div>

      <div className="flex flex-[2] flex-col gap-[20px] bg-[#33302C] px-[40px] py-[50px] text-white">
        <div className="flex flex-row justify-end gap-[2px]">
          <i className="fa-solid fa-ellipsis fa-2xl"></i>
          <i className="fa-solid fa-ellipsis fa-2xl"></i>
        </div>

        <div>
          <div className="mt-[30px] text-[20px] font-light text-[#EDF1F3]">
            Scope of work
          </div>

          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            Selecting your preferred location
          </h2>
        </div>

        <div className="mt-[10px] flex flex-col justify-between gap-[40px] md:flex-row">
          <div className="flex h-[108px] w-full flex-col items-center justify-center gap-[20px] rounded-[6px] border-[1px] border-[#EDF1F3] bg-[#474B35]">
            <i className="fa-solid fa-globe fa-lg"></i>
            <div className="text-[18px] font-light">Worldwide</div>
          </div>

          <div className="flex h-[108px] w-full flex-col items-center justify-center gap-[20px] rounded-[6px] border-[1px] border-[#EDF1F3]">
            <i className="fa-regular fa-clock fa-lg"></i>
            <div className="text-[18px] font-light">U.S. only</div>
          </div>
        </div>

        <div className="mt-[10px] flex flex-col gap-[10px]">
          <div className="text-[18px] font-light">
            Select region or country preferences (Optional)
          </div>

          <Select>
            <SelectTrigger className="h-[52px] w-full border-[1px] border-[#EDF1F3] bg-transparent text-[18px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent className="bg-[#33302C] text-white">
              <SelectItem value="country1">Country1</SelectItem>
              <SelectItem value="country2">Country2</SelectItem>
              <SelectItem value="country3">Country3</SelectItem>
              <SelectItem value="country4">Country4</SelectItem>
            </SelectContent>
          </Select>

          <div className="text-[18px] font-light">
            These location preferences will be displayed to all candidates, but
            anyone can submit proposals.
          </div>
        </div>

        <div className="h-[90px]" />

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
