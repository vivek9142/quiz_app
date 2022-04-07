import { useSelector } from 'react-redux';
import Timer from '../../Timer/Timer.component';
import './QuizQuesCard_Topic.styles.scss';

const QuizQuesCard_Topic = (props) =>{   
    const state = useSelector(state => state.ques);

    const {category} = state.ques[state.currentQues]; 

    return(
        <div className="quizQuesCard__topic--container">
            <div className="quizQuesCard__topic">
                <h3 className="quizQuesCard__topic--heading">Topic</h3>
                <h3 className="quizQuesCard__topic--sub-heading">{category}</h3>
            </div>
            
            <Timer/>
        </div>
    );
};

export default QuizQuesCard_Topic;