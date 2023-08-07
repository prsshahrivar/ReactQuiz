import {useEffect} from "react";

export default function Timer({dispatch, secondsRemaining}) {

    const minuets = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60


    useEffect(function () {

        const id = setInterval(function () {
            dispatch({type: 'tick'})
        }, 1000)


        return () => clearInterval(id)
    }, [dispatch])


    return (
        <div className='timer'>
            {minuets < 10 && "0"}
            {minuets}:
            {seconds < 10 && "0"}
            {seconds}
        </div>
    )
}