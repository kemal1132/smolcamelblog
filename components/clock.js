import { useSelector } from 'react-redux'
import {timer} from "../redux/reducers/selectors";



const Clock = () => {
  const secondsPassed = useSelector(timer).timer
  const minutesPassed = Math.floor(secondsPassed/60)
  const hoursPassed = Math.floor(minutesPassed/60)
  return (
    <div>
      Time you wasted if you do not hire me: {(hoursPassed>0) ? hoursPassed+':':''}{(minutesPassed%60+':')}{(secondsPassed%60<10) ? '0'+secondsPassed%60:secondsPassed%60}
      
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
      `}</style>
    </div>
  )
}

export default Clock