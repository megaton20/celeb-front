import { useState } from "react";

function BioEntry({ formData, setFormData, prevStep }) {
  const [error, setError] = useState("");
  const maxLength = 300;
  const minLength = 20;

  const wordCount = formData.bio.trim() === "" ? 0 : formData.bio.trim().split(/\s+/).length;
  const progress = (formData.bio.length / maxLength) * 100;

  // Determine progress bar color
  const getProgressColor = () => {
    if (progress <= 20) return "bg-red-500"; // Too short
    if (progress <= 50) return "bg-orange-500"; // Getting there
    if (progress <= 80) return "bg-yellow-500"; // Almost there
    return "bg-green-500"; // Good to go
  };

  const handleChange = (e) => {
    const bio = e.target.value;
    if (bio.length > maxLength) return;
    setFormData({ ...formData, bio });

    setError(bio.length < minLength ? "Your bio must be at least 20 characters long." : "");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Tell Us About Yourself</h2>
      <p className="text-gray-300 mb-2">Write a short bio (min: 20 characters, max: 300 characters).</p>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Bio Textarea */}
      <textarea
        placeholder="Write your bio..."
        value={formData.bio}
        onChange={handleChange}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        rows="5"
      ></textarea>

      {/* Progress Bar */}
      <div className="w-full bg-gray-600 rounded h-2 mt-2">
        <div
          className={`h-2 rounded ${getProgressColor()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Character and Word Count */}
      <p className="text-gray-400 text-sm mt-2">
        Characters: {formData.bio.length}/{maxLength} | Words: {wordCount}
      </p>

    </div>
  );
}

export default BioEntry;