import './QuizQuesCard_Ques.styles.scss';


const QuizQuesCard_Ques = ({id,question}) => {
    return(
        <div className='QuizQuesCard_Ques--container'>
            <div className="QuizQuesCard_Ques">
                <div className="QuizQuesCard_Ques--ques-num">
                QUESTION {id} of 6
                </div>
                <div className="QuizQuesCard_Ques--ques-text" style={{animation: `quesAnimation${id} 1s`}}>
                {question}
                </div>
            </div>
        </div>
    )
}

export default QuizQuesCard_Ques;