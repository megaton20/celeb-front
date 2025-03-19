function StepThree({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Social Links</h2>
      <input
        type="text"
        placeholder="Instagram"
        value={formData.instagram}
        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <input
        type="text"
        placeholder="Twitter"
        value={formData.twitter}
        onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full p-2 my-2 bg-gray-700 rounded"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 p-2 rounded">Back</button>
        <button onClick={nextStep} className="bg-yellow-500 p-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default StepThree;
