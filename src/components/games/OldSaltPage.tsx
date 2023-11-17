import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OldSaltPage() {
  return (
    <div className="mx-[80px] mt-[101px] flex flex-col items-center gap-[80px] py-[50px] lg:px-[80px] 2xl:flex-row">
      <img
        className="hidden h-[601px] w-1/3 object-scale-down 2xl:block"
        src="/images/games/image05.png"
      />
      <div className="flex w-2/3 flex-col items-center justify-between gap-[25px] 2xl:items-start 2xl:p-[50px]">
        <p className="text-center text-[40px] font-[700] text-[#EDF1F3] 2xl:text-left">
          Old Salt
        </p>
        <p className="text-center text-[20px] font-[400] text-[#EDF1F3] 2xl:text-left">
          The game is a survival adventure that requires the player to manage
          their character&#x27;s hunger, thirst, and health while exploring the
          island for resources and materials to help them survive.
        </p>
        <div className="text-center text-[18px] font-[700] 2xl:text-left">
          <p className="text-[#AFD275]">Total Price:</p>
          <p className="mt-[10px] text-[#EDF1F3]">$ 123.00 USD</p>
        </div>
        <div className="text-center text-[18px] 2xl:text-left">
          <p className="font-[700] text-[#AFD275]">Quality</p>
          <Select>
            <SelectTrigger className="mt-[10px] h-[44px] w-[74px] bg-[#211D19] text-white">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent className="w-[74px] bg-[#211D19] text-white">
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Sheet>
          <SheetTrigger>
            <button
              type="button"
              className="flex h-[52px] w-[136px] items-center justify-center rounded-xl bg-[#B1CE75] font-[600] text-[#EDF1F3]"
            >
              Add to Cart
            </button>
          </SheetTrigger>
          <SheetContent className="border-0 bg-[#35322F]">
            <SheetHeader>
              <SheetTitle className="text-[20px] font-[700] text-[#AFD275]">
                Your Cart
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-row items-center gap-[15px]">
                  <img src="/images/games/sheet/card_image_02.svg" />
                  <p className="w-1/2 text-[20px] font-[500] text-[#EDF1F3]">
                    Old Salt
                  </p>
                  <div className="mt-0 flex w-1/4 flex-col">
                    <div className="ml-auto">
                      <i className="fa-regular fa-circle-mark fa-xl text-white" />
                    </div>
                    <p className="text-right text-[14px] font-[400] text-[#EDF1F3]">
                      $123.00
                    </p>
                  </div>
                </div>
                <div className="mt-[50px] flex flex-row gap-[15px] border-b-[2px] py-[20px] font-[600]">
                  <p className="w-1/2 text-center text-[20px] font-[500] text-[#AFD275]">
                    TOTAL
                  </p>
                  <p className="ml-auto w-1/2 text-right text-[20px] font-[500] text-[#AFD275]">
                    $123.00
                  </p>
                </div>
                <div className="mt-[20px] flex flex-col gap-[15px]">
                  <p className="text-[12px] font-[300] text-[#EDF1F3]">
                    SECURE PAYMENTS PROVIDED BY
                  </p>
                  <div className="flex-start flex gap-[7px]">
                    <img src="/images/games/sheet/bankcard_01.svg" />
                    <img src="/images/games/sheet/bankcard_02.svg" />
                    <img src="/images/games/sheet/bankcard_03.svg" />
                  </div>
                </div>
                <div className="mt-[20px] flex justify-center">
                  <button
                    type="button"
                    className="h-[52px] w-[210px] rounded-lg bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]"
                  >
                    Check Out
                  </button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
