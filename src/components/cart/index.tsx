"use client";

import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function CartWizard() {
  const [step, setStep] = useState(1);

  return (
    <section className="my-[26px] flex flex-col">
      {step === 1 && <Step1 onNext={() => setStep((prev) => prev + 1)} />}

      {step === 2 && <Step2 onNext={() => setStep((prev) => prev + 1)} />}

      {step === 3 && <Step3 />}
    </section>
  );
}
