//Game of Life
import React from 'react';
import Style from "./gameOfLife.module.css";
import cloneDeep from 'lodash.clonedeep';

export default class GameOfLife extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: [],
            
        }
        this.refreshGrid = this.refreshGrid.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //this.refreshGrid();
        setTimeout(this.refreshGrid, 1); // I am really confused about why this set timeout is needed.
        
    }

    handleClick = (event) => {
        let target= event.target.id.split("-");
        let grid = cloneDeep(this.state.grid);
        if(event.target.className.toString().includes("inactive")){
          grid[target[0]][target[1]] = <div id={target[0]+"-"+target[1]} onClick={this.handleClick} className={Style.active} position="test" key={target[0]+"-"+target[1]}></div>
        }else{
          grid[target[0]][target[1]] = <div id={target[0]+"-"+target[1]} onClick={this.handleClick} className={Style.inactive} position="test" key={target[0]+"-"+target[1]}></div>
        }
        this.setState({grid:grid});

    }

    refreshGrid(){
        //TD handling removal of cells when size is changed --Tick
        //TD handling click on cell
        //TD adding more control
        //TD adding game of life update logic
        if(this.state.grid.length < this.props.gridRowSize||this.state.grid[0].length < this.props.gridColumnSize){
          let grid = cloneDeep(this.state.grid);;
          for(let height = 0; height < this.props.gridRowSize; height++){
            if(height>=this.state.grid.length){
              grid[height] = [];   //Dont create a new array if it already exists
            }
            for(let length = 0; length < this.props.gridColumnSize; length++){
                if(length>=grid[height].length||height>=this.state.grid.length){ //Dont reset the box if it already exists
                  grid[height][length] = <div id={height.toString()+"-"+length.toString()} onClick={this.handleClick} className={Style.inactive} position="test" key={height.toString()+"-"+length.toString()+Style.inactive}></div>;
                }
            }
          }
          console.log("Calling setstate with grid: ", grid); 
          this.setState({grid:grid}, console.log(this.state));
          
        }
    }

    componentDidUpdate(props){
        this.refreshGrid();
    }


    render() {
      let gridrowsize=this.props.gridRowSize;
      let gridcolsize=this.props.gridColumnSize;
      //styling the grid

      let dropzoneStyle = {
        gridTemplateColumns: "repeat("+gridcolsize+", auto)",
        gridTemplateRows: "repeat("+(this.props.gridRowSize-1)+", auto) 1fr",
      }
      
      let grid = this.state.grid.slice(0, gridrowsize);
      for(let i=0; i<grid.length; i++){
        grid[i] = grid[i].slice(0, gridcolsize);
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