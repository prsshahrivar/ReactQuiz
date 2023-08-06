/*eslint-disable*/

import Header from "./Header";
import Main from "./Main";
import {useEffect, useReducer} from "react";


const initialState = {
    questions: [],

    // loading , error, active, ready, finished
    status: "loading"
}

function reducer(state, action) {

    switch (action.type) {

        case "dataReceived" :
            return {
                ...state,
                questions: action.payload,
                status : 'ready'
            }

        case "dataFailed" :
            return {
                ...state,
                status : 'error'
            }


        default:
            throw new Error('Action Unknown')


    }
}

export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(function () {

        async function getQuestions() {

            try {
                const res = await fetch("http://localhost:8000/questions")
                const data = await res.json()
                dispatch({type: "dataReceived", payload: data})

            } catch (err) {
                dispatch({type:"dataFailed"})
            }

        }

        getQuestions();

    }, [])

    return <div className='app'>
        <Header/>

        <Main>
            <p> 1 / 15 </p>
            <p>question ?</p>
        </Main>

    </div>
}