function BioEntry({ formData, setFormData, prevStep }) {
    return (
      <div>
        <h2 className="text-xl font-bold">Bio</h2>
        <textarea
          placeholder="Write your bio..."
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="w-full p-2 my-2 bg-gray-700 rounded"
        ></textarea>
        <button onClick={prevStep} className="bg-gray-500 p-2 rounded">Back</button>
        <button className="bg-green-500 p-2 rounded">Submit</button>
      </div>
    );
  }
  
  export default BioEntry;
  