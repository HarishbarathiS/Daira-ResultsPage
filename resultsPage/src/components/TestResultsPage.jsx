import React from "react";
import PopupWindow from "./Popupwindow";

const TestResultsTable = () => {
  // Define the table row as a component inside the main component
  const TableRow = () => (
    <tr>
      <td className="border p-3"></td>
      <td className="border p-3"></td>
      <td className="border p-3"></td>
      <td className="border p-3">
        <PopupWindow />
      </td>
    </tr>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">Shivraj Kampani</h1>
        <div className="overflow-x-auto">
          <table className="border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full bg-gray-50 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-center">Test Name</th>
                <th className="border p-3 text-center">Time</th>
                <th className="border p-3 text-center">Date</th>
                <th className="border p-3 text-center">View Results</th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestResultsTable;
