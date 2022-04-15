import { useState,useEffect, useCallback} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { quesActions } from '../../redux/slice/slice';
import useShowTime from '../../utils/useShowTime';

import './Timer.styles.scss';

const Timer = props => {
    const {instanceTime,timerFunc,currentTime,time} = useShowTime();
    const dispatch = useDispatch(); 
    const state = useSelector(state => state.ques);
    const currentSlide = state.currentQues;

    const [domUnloading, setDomUnloading] = useState(false);
    
    useEffect(() => {
        return () => {
                setDomUnloading(true);
                dispatch(quesActions.addTimeSpan(currentTime.current))
                clearInterval(instanceTime);
        }
    }, [dispatch, domUnloading, instanceTime])
    
    const displayTime = useCallback((type)=>{
      if(type === 'min')
      return `${Math.floor(time.min / 10) === 0 ? "0" + time.min : time.min}`
      else if(type === 'sec')
      return `${Math.floor(time.sec / 10) === 0 ? "0" + time.sec : time.sec}`
    },[time])

    if(currentSlide===0 && typeof instanceTime==='object')
      timerFunc();

    if(domUnloading) return;
    return (
        <div className="quizQuesCard__timeCounter">
            <div className="quizQuesCard__timeCounter--min">
            <span>
                {displayTime('min')}
            </span>
            <span>min</span>
        </div>

        <div className="quizQuesCard__timeCounter--sec">
            <span>
                {displayTime('sec')}
            </span>
            <span>sec</span>
        </div>
        </div>
    )
};

export default Timer;