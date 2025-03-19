function UploadPhoto({ formData, setFormData, nextStep, prevStep }) {
    const handleFileUpload = (event) => {
      setFormData({ ...formData, photo: event.target.files[0] });
    };
  
    return (
      <div>
        <h2 className="text-xl font-bold">Upload Photo</h2>
        <input type="file" onChange={handleFileUpload} className="w-full p-2 my-2 bg-gray-700 rounded" />
        <div className="flex justify-between">
          <button onClick={prevStep} className="bg-gray-500 p-2 rounded">Back</button>
          <button onClick={nextStep} className="bg-yellow-500 p-2 rounded">Next</button>
        </div>
      </div>
    );
  }
  
  export default UploadPhoto;
  