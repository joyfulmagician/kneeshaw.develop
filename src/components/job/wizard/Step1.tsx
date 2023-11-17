"use client";

interface Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Props) {
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
            Unleashing Your Freelancing Potential
          </div>
          <h2 className="text-[40px] font-bold text-[#EDF1F3]">
            Let&#x27;s start with a title
          </h2>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="text-[18px] font-light">
            Write a title for your job post
          </p>

          <input
            type="text"
            className="h-[52px] w-full rounded-[6px] border-[1px] border-[#EDF1F3] bg-transparent pl-[10px]"
            placeholder="Title"
          />
        </div>

        <div className="text-[18px] font-light">
          <div>
            Here are some examples of work titles that freelancers commonly use
            on freelance websites:
          </div>

          <ul className="list-disc px-[20px]">
            <li>Web Developer</li>
            <li>Graphic Designer</li>
            <li>Content Writer</li>
            <li>Social Media Manager</li>
            <li>SEO Specialist</li>
          </ul>
        </div>

        <div className="mb-[20px] text-[18px] font-light">
          Remember, there are just examples, and you can customize them based on
          your specific skills and expertise. it&#x27;s important to choose a
          title that accurately represents your capabilities and attracts
          potential clients in your desired field
        </div>

        <div className="flex items-center justify-end">
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
