import React, { useEffect, useState } from 'react';

const DragandDrop = () => {

    const [dragVal, setDragVal] = useState("");

    const idk = (e) => {

        console.log("List of files dropped -> ", e.target.files)
        setDragVal(e.target.value);
    }
    useEffect(()=> {
        console.log(dragVal)
    }, [dragVal])


  return (
    <div>
      <h1>Drag and Drop</h1>
      <div className='play-ground-area'>
        <h2>Add files</h2>
        <div className='drag-area'>
            <label>Hello world
            <input
                type='file'
                multiple
                value={dragVal}
                onChange={(e) => idk(e)}
            />
            </label>
        </div>
      </div>
    </div>
  );
}

export default DragandDrop;
