import { useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import './QuizQuesCard_Topic.styles.scss';

const QuizQuesCard_Topic = ({topic}) =>{    
    const state = useSelector(state => state.ques);
    const currentSlide = state.currentQues;
    const initState = { min: 0, sec: 59, timeInstance:null };
    const [time, setTime] = useState(initState);
    const [domUnloading, setDomUnloading] = useState(false);
    let [instanceTime, setInstanceTime] = useState(null);
    let timer;
    let timerFunc = () => {
      timer = setInterval(() => {
        setTime((prevState) => {
          if (prevState.sec < 59) return { ...prevState, sec: prevState.sec + 1 };
          else if (prevState.sec === 59 && prevState.min < 59)
            return { ...prevState, min: prevState.min + 1, sec: 0 };
        })
      }, 1000);
      
      if(typeof instanceTime==='object')
      setInstanceTime(timer);
    };
    useEffect(() => {
        console.log(time);
        return () => {
                setDomUnloading(true);
                clearInterval(instanceTime);
        }
    }, [clearInterval,domUnloading,instanceTime])
    
    if(currentSlide===0 && typeof instanceTime==='object')
      timerFunc();

    if(domUnloading) return <></>;
    
    
    return(
        <div className="quizQuesCard__topic--container">
                        <div className="quizQuesCard__topic">
                            <h3 className="quizQuesCard__topic--heading">Topic</h3>
                            <h3 className="quizQuesCard__topic--sub-heading">{topic}</h3>
                        </div>

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
                    </div>
    );
};

export default QuizQuesCard_Topic;