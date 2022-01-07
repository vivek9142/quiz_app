import {useEffect,useRef} from 'react';
import lottie from 'lottie-web';

import './QuizQuesCard_AnsStatus.styles.scss';

const QuizQuesCard_AnsStatus = ({status}) =>{
    const container = useRef(null);
    
    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:false,
            animationData:require(`../../../assets/lottie/${status}.json`)
        });
    }, [status]);
    
    return(
        <div className={`QuizQuesCard_AnsStatus_container--${status==='right'? 'right-ans': 'wrong-ans'}`} >
                <div className="QuizQuesCard_AnsStatus " ref={container}>
                </div>
        </div>
    )
};

export default QuizQuesCard_AnsStatus;

