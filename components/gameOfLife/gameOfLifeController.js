//Game of Life
import React from 'react';
import {connect} from "react-redux";

import GameOfLife from './gameOfLife';
import Style from './gameOfLifeController.module.css';
import {timer} from "../../redux/reducers/selectors";




const gameOfLifeController = class GameOfLifeController extends React.Component {
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
      console.log(this.props);
      
      let secondsPassed = this.props.timer
      let minutesPassed = Math.floor(secondsPassed/60)
      let hoursPassed = Math.floor(minutesPassed/60)
      
      return (
        <div>
          <div className={Style.container}>
            <div className={Style.controlPanel}>
              <label className={Style.label}>
                Grid amount of columns:
                <input className={Style.input} type="number" value={this.state.gridColumnSize} onChange={this.handleGridColumnSizeChange}></input>
              </label>
              <label className={Style.label}>
                Grid amount of rows: 
                <input className={Style.input} type="number" value={this.state.gridRowSize} onChange={this.handleGridRowSizeChange}></input>
              </label>

              Time you wasted if you do not hire me: {(hoursPassed>0) ? hoursPassed+':':''}{(minutesPassed%60+':')}{(secondsPassed<10) ? '0'+secondsPassed%60:secondsPassed%60}


            </div> 
            <div className={Style.controlPanelPlaceHolder}></div>
            <GameOfLife gridColumnSize={this.state.gridColumnSize} gridRowSize={this.state.gridRowSize}></GameOfLife>
          </div>
        </div>
        
      );
    }
  }

  export default connect(timer)(gameOfLifeController);