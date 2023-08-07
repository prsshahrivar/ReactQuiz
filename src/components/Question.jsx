import FinishScreen from "./FinishScreen";

export default function Question({question, answer, dispatch, index, numQuestions}) {

    const hasAnswered = answer !== null


     if (index  < numQuestions ) {
         return (
             <div>
                 <h4>{question.question}</h4>

                 <div className='options'>
                     {question.options.map((option, index) => <button
                             onClick={() => dispatch({type: "newAnswer", payload: index})}
                             className={`btn btn-option ${index === answer ? "answer" : ""} 
                    ${hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
                             disabled={hasAnswered}
                             key={option}>

                             {/* TEXT */}
                             {option}

                         </button>
                     )}
                 </div>


                 {hasAnswered && index < numQuestions - 1 &&
                 <button className='btn btn-ui' onClick={() => dispatch({type: "nextQuestion"})}>next</button>}

                 {hasAnswered && index === numQuestions - 1 &&
                 <button className='btn btn-ui' onClick={() => dispatch({type: "finish"})}>finish</button>}

             </div>
         )
     }


}