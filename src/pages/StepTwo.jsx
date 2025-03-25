function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Step 2: Contact info</h2>
      <p className="text-gray-300 mb-6">Enter your contact details to continue.</p>

      {/* Email Input */}
      <label className="block text-gray-300 mb-1">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Phone Number Input */}
      <label className="block text-gray-300 mb-1">Phone Number</label>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-3 my-2 bg-gray-700 rounded border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back
        </button>
        <button onClick={nextStep} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600">
          Next
        </button>
      </div>
    </div>
  );
}

export default StepTwo;