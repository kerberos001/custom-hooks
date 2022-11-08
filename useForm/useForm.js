import { useState } from "react";





const useForm = ( inicialForm={} ) => {
 
    const [formState, setFormState] = useState(inicialForm);    

    const onInputChange = ( {target:{name, value}} ) => {
        
        setFormState({
            ...formState,
            [name]: value
        });
    }
    
    const onReset = ()=> setFormState(inicialForm);


    return {
        ...formState,
        formState,
        onInputChange,
        onReset,
    };
}



export {
    useForm
}
