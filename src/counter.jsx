import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(50);
    const handleAdd = () =>{
       const newCount = count+1;
       setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return(
        <div style={{border: '2px solid yellow', padding:"10px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={handleAdd}>Add Count</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}