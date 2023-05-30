import React from "react";

const ServiceArea: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h2 className="text-4xl text-red-800 font-bold">Service Area</h2>
      <div className="flex items-center justify-center pt-4">
        <div className="flex-col">
          <ul>
            <li>
              <h2> Brownstown, Indiana</h2>
            </li>
            <li>
              <h2> Seymour, Indiana</h2>
            </li>
            <li>
              <h2> Bedford, Indiana</h2>
            </li>
            <li>
              <h2> Colombus, Indiana</h2>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ServiceArea;
