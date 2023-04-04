const Answer = ({ answer, status, onClick }) => {
  let color = "bg-[#383838]";

  if (status === "true") {
    color = "bg-green-600";
  } else if (status === "false") {
    color = "bg-red-600";
  }

  return (
    <div
      onClick={() => {
        onClick && onClick(answer);
      }}
      className={`flex h-24 items-center justify-center rounded-xl md:h-40 ${color} cursor-pointer p-4 text-center text-sm font-semibold text-gray-300 shadow-xl shadow-[#101010] transition duration-500 hover:scale-105 md:text-lg`}
    >
      {answer}
    </div>
  );
};

export default Answer;
