//Game of Life
import React from 'react';
import Style from "./gameOfLife.module.css";
import cloneDeep from 'lodash.clonedeep';


export default class GameOfLife extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: {},
            
        }
  
        this.handleClick = this.handleClick.bind(this);
       
        
    }

    handleClick = (event) => {
        let target= event.target.id.split("-");
        let grid = cloneDeep(this.state.grid);
        if(event.target.id in grid){
          grid[event.target.id] = {isActive: !grid[event.target.id].isActive};
        }else{
          grid[event.target.id] = {xCor:target[0], yCor:target[1], isActive:true};
        }
        this.setState({grid:grid});

    }




    render() {
      let gridrowsize=this.props.gridRowSize;
      let gridcolsize=this.props.gridColumnSize;
      //styling the grid

      let dropzoneStyle = {
        gridTemplateColumns: "repeat("+gridcolsize+", 100px)",
        gridTemplateRows: "repeat("+(gridrowsize-1)+", 100px) 1fr",
      }
      
    
      let grid = [];
      for(let i = 0; i<gridrowsize; i++){
        for(let j = 0; j<gridcolsize; j++){
          let id = i+"-"+j;
          let className = this.state.grid[id]?this.state.grid[id].isActive?Style.active:Style.inactive:Style.inactive;
          let cell = <div id={id} key={id} className={className} onClick={this.handleClick}></div>
          grid.push(cell);
        }
      }

      
      
      
      return (
        <React.Fragment>
          <div className={Style.grid} style={dropzoneStyle}>
            {grid}
            
          </div>
        </React.Fragment>
      );
    }
  }