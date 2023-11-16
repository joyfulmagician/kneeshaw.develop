"use client";

export default function HorizonScroll() {
  return (
    <div className="mt-[75px] flex flex-row justify-center gap-[20px] text-[#E7717D]">
      {Array.from(Array(6).keys()).map((k) => (
        <div
          key={k}
          className="h-[14px] w-[14px] rounded-[10px] border border-[#E7717D]"
        />
      ))}
    </div>
  );
}
