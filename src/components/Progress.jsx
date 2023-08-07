export default function Progress({ numQuestions, index , points, maxPoints, answer}) {
    return (
        <header className='progress'>

            <progress value={index + Number(answer !== null)} max={numQuestions}/>
            <p> Question <strong>{index + 1}</strong> / {numQuestions} </p>
            <p> Score <strong>{points}</strong> / {maxPoints} </p>

        </header>
    )
}