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
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Unity
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  SEO
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Web Development
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Google Analytics
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  Business with 1-9 Employees
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
            <button className="h-[32px] w-auto rounded-[8px] border-[1px] border-[#AFD275]">
              <div className="flex flex-row items-center px-[7px]">
                <span className="text-[16px] font-normal text-[#AFD275]">
                  SEO
                </span>
                &nbsp;&nbsp;
                <i
                  className="fa-solid fa-plus fa-sm"
                  style={{ color: "#AFD275" }}
                ></i>
              </div>
            </button>
          </div>
        </div>

        <div className="mb-[10px] h-[125px] text-[18px] font-light">
          <p>full stack development skills</p>
          <p>full stack development skills</p>
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
