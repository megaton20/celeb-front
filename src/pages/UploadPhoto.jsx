import { useState } from "react";

function UploadPhoto({ formData, setFormData, nextStep, prevStep }) {
  const [previews, setPreviews] = useState(formData.photos || []);
  const [error, setError] = useState("");

  // Handle single file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the first file
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviews([reader.result]); // Replace any existing image
      setFormData({ ...formData, photos: [reader.result] });
      setError(""); // Clear error message
    };
    reader.readAsDataURL(file);
  };

  // Remove the uploaded image
  const removeImage = () => {
    setPreviews([]);
    setFormData({ ...formData, photos: [] });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Upload Your Photo</h2>
      <p className="text-gray-300 mb-6">You can upload only 1 image.</p>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* File Input */}
      <label className="block text-gray-300 mb-1">Select Image (Max: 1)</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="w-full p-2 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none"
        disabled={previews.length >= 1} // Disable input if 1 image is uploaded
      />

      {/* Image Preview */}
      {previews.length > 0 && (
        <div className="mt-4 relative">
          <img
            src={previews[0]}
            alt="Uploaded Preview"
            className="w-32 h-32 object-cover rounded-lg border border-gray-600"
          />
          <button
            onClick={removeImage}
            className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs"
          >
            X
          </button>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back
        </button>
        <button 
          onClick={nextStep} 
          className={`px-4 py-2 rounded ${previews.length === 1 ? "bg-yellow-500 hover:bg-yellow-600 text-gray-900" : "bg-gray-500 text-gray-400 cursor-not-allowed"}`} 
          disabled={previews.length !== 1} // Ensures exactly 1 photo before proceeding
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UploadPhoto;
