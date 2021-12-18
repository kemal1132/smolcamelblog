//Game of Life
import React from 'react';
import GameOfLife from './gameOfLife';
import Style from './gameOfLifeController.module.css';



export default class GameOfLifeController extends React.Component {
    constructor(props){
        super(props);
        this.state ={gridColumnSize:4, gridRowSize:4};

        this.handleGridColumnSizeChange = this.handleGridColumnSizeChange.bind(this);
        this.handleGridRowSizeChange = this.handleGridRowSizeChange.bind(this);
    }
    
    handleGridColumnSizeChange(event){
      if(event.target.value < 0){
        event.target.value = 0;
      }
        this.setState({gridColumnSize:event.target.value});
    }

    handleGridRowSizeChange(event){  
      if(event.target.value < 0){
        event.target.value = 0;
      }
        this.setState({gridRowSize:event.target.value});
    }

    render() {
      
      return (
        <div>
          <div className={Style.container}>
            <div className={Style.controlPanel}>
              <label>
                Grid amount of columns:
                <input className={Style.input} type="number" value={this.state.gridColumnSize} onChange={this.handleGridColumnSizeChange}></input>
              </label>
              <label>
                Grid amount of rows: 
                <input className={Style.input} type="number" value={this.state.gridRowSize} onChange={this.handleGridRowSizeChange}></input>
              </label>
            </div> 
            <div className={Style.controlPanelPlaceHolder}></div>
            <GameOfLife gridColumnSize={this.state.gridColumnSize} gridRowSize={this.state.gridRowSize}></GameOfLife>
          </div>
        </div>
        
      );
    }
  }