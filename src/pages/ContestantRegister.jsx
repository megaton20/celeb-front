import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import UploadPhoto from "./UploadPhoto";
import BioEntry from "./BioEntry";
import ProgressBar from "../components/ProgressBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContestantRegistration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    stageName: "",
    email: "",
    phone: "",
    photos: "",
    bio: "",
  });

  const [error, setError] = useState("");

  const validateStep = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.stageName)) {
      setError("Please fill in all required fields.");
      return false;
    }
    if (step === 2 && (!formData.email || !formData.phone)) {
      setError("Please complete all fields before proceeding.");
      return false;
    }
    if (step === 3 && formData.photos.length !== 1) {
      setError("Please upload exactly 2 photos.");
      return false;
    }
    if (step === 4 && formData.bio.length < 20) {
      setError("Your bio must be at least 20 characters long.");
      return false;
    }
    setError(""); // Clear errors if all conditions are met
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return; // Ensure all fields are valid before submitting

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("stageName", formData.stageName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("bio", formData.bio);
    formData.photos.forEach((photo) => {
      formDataToSend.append("photos", photo);
    });

    console.log(formDataToSend);

    try {
      const response = await fetch("http://localhost:4000/contest/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Error submitting registration.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="text-white rounded-lg">
        <br />
        <br />
        <div className="mt-5 max-w-lg mx-auto p-6 bg-gray-800">
          <ProgressBar step={step} totalSteps={4} />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <UploadPhoto formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          
          {/* Last Step - Show both Previous & Submit button */}
          {step === 4 && (
            <>
              <BioEntry formData={formData} setFormData={setFormData} />
              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                  Back
                </button>
                <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Submit
                </button>
              </div>
            </>
          )}
        </div>

        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default ContestantRegistration;
