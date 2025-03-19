import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import UploadPhoto from "./UploadPhoto";
import BioEntry from "./BioEntry";
import ProgressBar from "../components/ProgressBar";

function ContestantRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    stageName: "",
    age: "",
    email: "",
    rapStyle: "",
    experience: "",
    influences: "",
    instagram: "",
    twitter: "",
    phone: "",
    photo: null,
    bio: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className=" text-white rounded-lg">
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="mt-5 max-w-lg mx-auto p-6 bg-gray-800">
      <ProgressBar step={step} totalSteps={5} />
          {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <StepThree formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 4 && <UploadPhoto formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 5 && <BioEntry formData={formData} setFormData={setFormData} prevStep={prevStep} />}
      </div>
    </div>
  );
}

export default ContestantRegistration;