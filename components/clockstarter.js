import { useEffect} from "react";
import { useDispatch} from "react-redux";
import {TICK} from '../redux/types';

//This component mounts a interval that ticks the timer at an interval, technically it remounts everytime page changes,
//so if page changes before second passes that second will be lost.
const ClockStarter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(
          () => dispatch({ type: TICK }),
          1000
        );
        return () => clearTimeout(timer);
      });
    return null;
}

export default ClockStarter;