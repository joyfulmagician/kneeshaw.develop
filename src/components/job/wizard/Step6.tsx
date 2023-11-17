"use client";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export default function Step2({ onBack, onNext }: Props) {
  return (
    <>
      <div className="hidden h-auto flex-1 bg-[#A0BF6C] lg:flex" />

      <div className="flex flex-[2] flex-col gap-[20px] bg-[#33302C] px-[40px] py-[50px] text-white">
        <div className="flex flex-row justify-end gap-[2px]">
          <i className="fa-solid fa-ellipsis fa-2xl" />
          <i className="fa-solid fa-ellipsis fa-2xl" />
        </div>

        <div>
          <div className="mt-[30px] text-[20px] font-light text-[#EDF1F3]">
            Scope of work
          </div>

          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            Tell us about your budget
          </h2>
        </div>

        <div className="mt-[10px] flex flex-col justify-between gap-[40px] md:flex-row">
          <button className="flex h-[108px] w-full flex-col items-center justify-center gap-[20px] rounded-[6px] border-[1px] border-[#EDF1F3] bg-[#474B35]">
            <i className="fa-regular fa-clock fa-lg"></i>
            <div className="text-[18px] font-light">Hourly Rate</div>
          </button>

          <button className="flex h-[108px] w-full flex-col items-center justify-center gap-[20px] rounded-[6px] border-[1px] border-[#EDF1F3]">
            <i className="fa-solid fa-globe fa-lg"></i>
            <div className="text-[18px] font-light">Project Budget</div>
          </button>
        </div>

        <div className="mt-[20px] flex flex-col gap-[30px] md:flex-row">
          <div className="flex flex-col">
            <div className="text-[14px] font-normal">From</div>

            <div className="flex flex-row items-center gap-[5px]">
              <input
                type="text"
                id="hour"
                className="h-[40px] w-[117px] rounded-[4px] border-[1px] border-[#EDF1F3] bg-transparent pr-[10px] text-right"
                placeholder="$15"
              />

              <div className="text-[14px] font-normal">/hour</div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-[14px] font-normal">To</div>

            <div className="flex flex-row items-center gap-[5px]">
              <input
                type="text"
                className="h-[40px] w-[117px] rounded-[4px] border-[1px] border-[#EDF1F3] bg-transparent pr-[10px] text-right"
                placeholder="$32"
              />

              <div className="text-[14px] font-normal">/hour</div>
            </div>
          </div>
        </div>

        <div className="h-[145px]" />

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
      </div>
    </>
  );
}
