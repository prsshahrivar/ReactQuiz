export default function FinishScreen({points, maxPoints, highscore, dispatch}) {

    const percentage = Math.ceil((points / maxPoints) * 100)

    return (<>
            <div className='result'>
                <p>you scored <strong>{points}</strong> out of {maxPoints} ( %{percentage} ) </p>
                <p className='highscore'> Highscore is {highscore} points </p>
            </div>

            <button className='btn ' onClick={() => dispatch({type: "restart"})}>Restart</button>
        </>
    )
}