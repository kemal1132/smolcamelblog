//Game of Life
import React from 'react';
import styles from "./gameOfLife.module.css";

export default class GameOfLife extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: []
        }
    }
    
    render() {
      let gridrowsize=50;
      let gridcolsize=50;

      //styling the grid
      let columnStyle = "";
      for(let length = 0; length < gridcolsize; length++){
        columnStyle += "auto "
      }
      let dropzoneStyle = {
        gridTemplateColumns: columnStyle
      }
      
      
      
      
      let grid = [];
      
      for(let height = 0; height < gridrowsize; height++){
        grid[height] = [];
        for(let length = 0; length < gridcolsize; length++){
          grid[height][length] = <div className='inactive' key={height.toString()+length.toString()}></div>;
        }
      }
    
        
      
      return (
        <div>
          <h1>Hello, world!</h1>
          <div className={styles.grid} style={dropzoneStyle}>
            {grid}
          </div>
        </div>
      );
    }
  }