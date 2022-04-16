import { useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { quesActions } from '../../redux/slice/slice';
import useShowTime from '../../utils/useShowTime';

import './Timer.styles.scss';

const Timer = props => {
    const {instanceTime,timerFunc,currentTime,displayTime} = useShowTime();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, domUnloading, instanceTime])
    

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