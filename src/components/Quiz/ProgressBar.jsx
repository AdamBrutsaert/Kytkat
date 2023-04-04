const ProgressBar = ({ actual, total }) => {
  return (
    <>
      <div className="relative hidden w-96 md:block">
        <div className="h-6 rounded-full bg-gray-700">
          <div
            className="h-6 rounded-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${(actual / total) * 100}%`,
            }}
          />
        </div>
        <div className="absolute top-6 left-0 right-0 mt-2 text-center font-semibold text-gray-300">
          <span className="text-blue-500">{actual}</span> / {total}
        </div>
      </div>
      <div className="text-center font-semibold text-gray-300 md:hidden">
        <span className="text-blue-500">{actual}</span> / {total}
      </div>
    </>
  );
};

export default ProgressBar;
