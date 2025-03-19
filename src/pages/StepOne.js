function StepOne({ formData, setFormData, nextStep }) {
    return (
      <div>
        <h2 className="text-xl font-bold">Personal Information</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full p-2 my-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Stage Name"
          value={formData.stageName}
          onChange={(e) => setFormData({ ...formData, stageName: e.target.value })}
          className="w-full p-2 my-2 bg-gray-700 rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full p-2 my-2 bg-gray-700 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 my-2 bg-gray-700 rounded"
        />
        <button onClick={nextStep} className="bg-yellow-500 p-2 rounded w-full mt-4">
          Next
        </button>
      </div>
    );
  }
  
  export default StepOne;