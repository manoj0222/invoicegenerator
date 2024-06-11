import React from "react";

export default function FormButtons({ onClick, index ,handleBack}) {

  return (
    <div className="width-80 py-2 px-2 flex justify-around mt-8 mb-4">
      <button
        className={
          index > 0
            ? "px-4 py-2 flex align-center justify-center rounded-xl font-semibold uppercase bg-slate-100 hover:bg-slate-300  text-slate-400  hover:text-white transition duration-200 ease-in-out  cursor-pointer border-1 border-slate-300 "
            : "px-4 py-2 flex align-center justify-center rounded-xl font-semibold uppercase bg-slate-100  text-slate-400 border-1 border-slate-300 "
        }
        onClick={handleBack}
      >
        Back
      </button>
      <button
        className="px-4 py-2 flex align-center justify-center rounded-xl font-semibold uppercase bg-blue-200 hover:bg-blue-400  text-slate-400  hover:text-white transition duration-200 ease-in-out cursor-pointer border-1 border-slate-300"
        onClick={onClick}
      >
        {index + 1 >= 7 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
