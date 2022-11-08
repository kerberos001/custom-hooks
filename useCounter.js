import { useState } from "react";


const useCounter =(inicialValue=10)=> {

    const [counter, setCounter] = useState(inicialValue);


    const increment = ( value = 1 ) => setCounter(( counter )=>counter+value );
    const decrease = ( value=1 ) => setCounter( ( counter )=>counter-value );
    const reset = () => setCounter(inicialValue);




    return {
        counter,
        increment,
        decrease,
        reset,
    };

}

export {
    useCounter
}