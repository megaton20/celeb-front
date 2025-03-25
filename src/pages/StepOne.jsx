import { Link } from "react-router-dom";

function StepOne({ formData, setFormData, nextStep }) {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Step 1: Personal Information</h2>
      <p className="text-gray-300 mb-6">Enter your personal details to continue.</p>

      {/* First Name */}
      <label className="block text-gray-300 mb-1">First Name</label>
      <input
        type="text"
        placeholder="Enter first name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Last Name */}
      <label className="block text-gray-300 mb-1">Last Name</label>
      <input
        type="text"
        placeholder="Enter last name"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Stage Name */}
      <label className="block text-gray-300 mb-1">Stage Name</label>
      <input
        type="text"
        placeholder="Enter your stage name"
        value={formData.stageName}
        onChange={(e) => setFormData({ ...formData, stageName: e.target.value })}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Link to="/" className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back
        </Link>
        <button onClick={nextStep} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600">
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;