import React from "react";
import "./List.css";

export const List = ({ children }) => {
<<<<<<< HEAD
  console.log({ children } )
=======
>>>>>>> 62b749493abe88398e58b3abb8c8da60e28b1cae
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
