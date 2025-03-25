function ProgressBar({ step, totalSteps }) {
    const progress = (step / totalSteps) * 100;
  
    return (
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  
  export default ProgressBar;