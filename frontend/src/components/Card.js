import React from "react";

const Card = ({ file }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <iframe
          style={{ height: "20rem" }}
          className="w-full"
          src={file.filePath}
          title={file.name}
        ></iframe>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{file.name}</div>
          <p className="text-gray-700 text-base">{file.description}</p>
        </div>
        {/* <div className="px-6 pb-2">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center rounded-full">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Card;
