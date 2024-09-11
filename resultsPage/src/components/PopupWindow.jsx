import React from "react";
import Popup from "reactjs-popup";

export default function PopupWindow() {
  return (
    <Popup
      trigger={
        <button className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors">
          Result
        </button>
      }
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="flex justify-center items-center fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white flex flex-col justify-center items-center w-96 h-96 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Popup Title</h2>
            <p>Popup content here!!</p>
            <button
              className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
