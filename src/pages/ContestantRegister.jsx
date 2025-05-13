import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import BioEntry from "./BioEntry";
import ProgressBar from "../components/ProgressBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContestantRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    stageName: "",
    email: "",
    phone: "",
    bio: "",
  });
  const [error, setError] = useState("");

  const validateStep = () => {
    setError(""); // Clear previous errors

    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.stageName)) {
      setError("Please fill in all required fields.");
      return false;
    }
    if (step === 2 && (!formData.email || !formData.phone)) {
      setError("Please complete all fields before proceeding.");
      return false;
    }
    if (step === 3 && (!formData.bio || formData.bio.length < 20)) {
      setError("Your bio must be at least 20 characters long.");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setError(""); // Clear error when going back
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:4000/contest/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Correctly sending JSON
        credentials: "include", // Keep session data (if needed)
      });

      const result = await response.json();

      if (result.status === true) {
        navigate("/"); // Redirect to home
      } else {
        setError(result.message || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="text-white rounded-lg">
        <br />
        <br />
        <div className="mt-5 max-w-lg mx-auto p-6 bg-gray-800">
          <ProgressBar step={step} totalSteps={3} />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {step === 1 && <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && (
            <>
              <BioEntry formData={formData} setFormData={setFormData} />
              <div className="flex justify-between mt-4">
                <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
