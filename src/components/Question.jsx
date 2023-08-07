export default function Question({question, answer, dispatch}) {

    const hasAnswered = answer !== null

    return (
        <div>
            <h4>{question.question}</h4>

            <div className='options'>
                {question.options.map((option, index) => <button
                    onClick={() => dispatch({type: "newAnswer", payload: index})}
                    className={`btn btn-option ${index === answer ? "answer" : ""} 
                    ${ hasAnswered ? ( index === question.correctOption ? "correct" : "wrong") : ""   }`}
                    disabled={hasAnswered}
                    key={option}>{option}</button>
                )}
            </div>

            {hasAnswered && <button className='btn btn-ui' onClick={()=>dispatch({type:"nextQuestion"})}>next</button>}

        </div>
    )
}