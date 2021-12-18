//Game of Life
import React from 'react';
import GameOfLife from './gameOfLife';
import Style from './gameOfLifeController.module.css';



export default class GameOfLifeController extends React.Component {
    constructor(props){
        super(props);
       
    }
    
    render() {
      
      return (
        <div>
          <div className={Style.container}>
            <div className={Style.controlPanel}>
              <h1>Hello, world!</h1>
            </div> 
            <div className={Style.controlPanelPlaceHolder}></div>
            <GameOfLife></GameOfLife>
          </div>
        </div>
        
      );
    }
  }