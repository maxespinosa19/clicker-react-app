import {useState} from "react";

export default function Body (){
    const [counter, setCounter] = useState(0)



    return (
        <section>
            <h2>Counter</h2>
            <p>{counter}</p>
            <button onClick={() => {setCounter(counter+1)}}>+</button>
            <button onClick={() => setCounter(counter-1)}>-</button>
            <button onClick={() =>setCounter(0)}>Reset</button>
        </section>
    )
}