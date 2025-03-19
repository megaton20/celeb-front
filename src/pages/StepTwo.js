function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Performance Details</h2>
      <input
        type="text"
        placeholder="Rap Style"
        value={formData.rapStyle}
        onChange={(e) => setFormData({ ...formData, rapStyle: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <input
        type="text"
        placeholder="Experience Level"
        value={formData.experience}
        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <input
        type="text"
        placeholder="Influences"
        value={formData.influences}
        onChange={(e) => setFormData({ ...formData, influences: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 p-2 rounded">Back</button>
        <button onClick={nextStep} className="bg-yellow-500 p-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default StepTwo;
