import React from "react";
import { TiTick } from "react-icons/ti";
export default function StatusTracker({statusName, currentstep }) {
  return (
    <div className="m-2 p-4 flex justify-between flex-col md:flex-row items-center h-auto">
      {statusName.map((Description, index) => {
        return (
          <React.Fragment key={index}>
            <div className="realtive flex flex-col text-teal-600 items-center">
              {/*line number*/}
              <div
                className="rounded-full 
        font-semi bg-gray:400 border px-3 py-1
        flex align-center justify-center
         transition duration-500 ease-in-out
         "
              >
                {currentstep+1 > index + 1 ? <TiTick /> : index + 1}
              </div>
              {/*Descritpion*/}
              <div className="absolute top-0 mt-22 font-medium uppercase text-center text-xs -ml-2">
                {Description}
              </div>
            </div>
            {index < statusName.length - 1 && (
              <div
                className={
                  currentstep+1 > index + 1
                    ? "flex-grow border-t-2 transition duration-500 ease-in-out border-green-600 mx-1"
                    : "flex-grow border-t-2 transition duration-500 ease-in-out mx-1"
                }
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
