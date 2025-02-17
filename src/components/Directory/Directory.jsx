import React from 'react';
import { NavLink } from 'react-router-dom';

const Directory = () => {

    const directoryItems = [
        {
            path: "/",
            name: "Directory"
        },
        {
            path: "/drag-and-drop",
            name: "Drag and Drop"
        }
    ]

  return (
    <div>
      <h1>Directory</h1>
      {
        directoryItems.map((item, idx) => (
            <div key={`${idx}-${item.path}`}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </div>
        ))
      }
    </div>
  );
}

export default Directory;
