"use client";

import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";

export default function JobWizard() {
  const [step, setStep] = useState(1);

  return (
    <section className="mx-[90px] mb-[90px] mt-[61px] flex h-auto w-auto flex-row rounded-[16px] lg:max-h-[949px]">
      {step === 1 && <Step1 onNext={() => setStep((prev) => prev + 1)} />}

      {step === 2 && (
        <Step2
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 3 && (
        <Step3
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 4 && (
        <Step4
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 5 && (
        <Step5
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 6 && (
        <Step6
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 7 && (
        <Step7
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}

      {step === 8 && (
        <Step8
          onNext={() => setStep((prev) => prev + 1)}
          onBack={() => setStep((prev) => prev - 1)}
        />
      )}
    </section>
  );
}
