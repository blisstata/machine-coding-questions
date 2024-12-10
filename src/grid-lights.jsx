import { useState } from 'react';
import './App.css';

function GridLights() {
  const grid = new Array(9).fill(0);
  const [gridState, setGridState] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  function deactivateCells() {
    setIsDeactivating(true);

    const interval = setInterval(() => {
      setGridState((origState) => {
        const newState = [...origState];
        newState.pop();

        if(newState.length === 0) {
          clearInterval(interval);
          setIsDeactivating(false);
        }

        return newState;
      });
    }, 300);
  }

  const handleClick = (value) => {
    if(!gridState.includes(value)) {
      const newState = [...gridState];
      newState.push(value);

      setGridState(newState);

      if(newState.length === grid.length - 1) {
        deactivateCells();
      }
    }
  }

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Grid Lights</h4>
      <div className='grid'>
        {grid.map((_cell, index) => {
          const isActive = gridState.includes(index);
          if(index !== 4) {
            return (
              <button 
                key={`cell_${index}`} 
                value={index}
                disabled={isDeactivating || gridState.includes(index)}
                onClick={() => handleClick(index)}
                className={`cell ${isActive ? 'cell__activated' : ''}`}
                aria-label={`Cell ${index}`}
              />
            );
          } else {
            return <span key={index} value={index} />
          }
        })}
      </div>
      <span className='order'>order: {gridState.join(",")}</span>
    </>
  ); 
}

export default GridLights
