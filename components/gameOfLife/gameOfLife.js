//Game of Life
import React from 'react';
import Style from "./gameOfLife.module.css";

export default class GameOfLife extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: [],
           
        }

        
    }
    


    render() {
      let gridrowsize=this.props.gridRowSize;
      let gridcolsize=this.props.gridColumnSize;
      //styling the grid
      let columnStyle = "";
      for(let length = 0; length < gridcolsize; length++){
        columnStyle += "auto "
      }
      let dropzoneStyle = {
        gridTemplateColumns: columnStyle
      }
      
      
      
      
      
      
        //TD handling removal of cells when size is changed
        //TD handling click on cell
        //TD adding more control
        //TD adding game of life update logic
        let grid = this.state.grid;
    
        for(let height = 0; height < gridrowsize; height++){
          grid[height] = [];
          for(let length = 0; length < gridcolsize; length++){
            grid[height][length] = <div id={height.toString()+"-"+length.toString()} onClick={this.handleClick} className={Style.inactive} position="test" key={height.toString()+"-"+length.toString()+Style.inactive}></div>;
          }
        }
        
   
      
      return (
        <div>
          <div className={Style.grid} style={dropzoneStyle}>
 
            {grid}
          </div>
        </div>
      );
    }
  }