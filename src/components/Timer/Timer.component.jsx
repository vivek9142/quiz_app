import { useState,useEffect,useRef, useCallback} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { quesActions } from '../../redux/slice/slice';

import './Timer.styles.scss';

const Timer = props => {
    
    const dispatch = useDispatch(); 
    const state = useSelector(state => state.ques);
    const currentSlide = state.currentQues;

    const initState = { min: 0, sec: 0, timeInstance:null };

    const [time, setTime] = useState(initState);
    const currentTime = useRef();

    const [domUnloading, setDomUnloading] = useState(false);
    let [instanceTime, setInstanceTime] = useState(null);

    let timer = useRef(null);
    
    let timerFunc = useCallback(() => {
      timer.current = setInterval(() => {
        setTime((prevState) => {
          if (prevState.sec < 59) return { ...prevState, sec: prevState.sec + 1 };
          else if (prevState.sec === 59 && prevState.min < 59)
            return { ...prevState, min: prevState.min + 1, sec: 0 };
        })
      }, 1000);
      
      if(typeof instanceTime ==='object')
      setInstanceTime(timer.current);
    },[instanceTime]);
    
    currentTime.current = time;
    
    useEffect(() => {
        return () => {
                setDomUnloading(true);
                dispatch(quesActions.addTimeSpan(currentTime.current))
                clearInterval(instanceTime);
        }
    }, [dispatch, domUnloading, instanceTime])
    
    

    if(currentSlide===0 && typeof instanceTime==='object')
      timerFunc();

    if(domUnloading) return <></>;
    return (
        <div className="quizQuesCard__timeCounter">
            <div className="quizQuesCard__timeCounter--min">
            <span>
                {`${Math.floor(time.min / 10) === 0 ? "0" + time.min : time.min}`}
            </span>
            <span>min</span>
        </div>

        <div className="quizQuesCard__timeCounter--sec">
            <span>
                {`${Math.floor(time.sec / 10) === 0 ? "0" + time.sec : time.sec}`}
            </span>
            <span>sec</span>
        </div>
        </div>
    )
};

export default Timer;