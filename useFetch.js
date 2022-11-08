import { useEffect, useState } from "react"






const useFetch = ( url ) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });


    const getFetch = async() => {

        setState({
            ...state,           
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            ...state,
            data: data,
            isLoading: false,
        });
    }


    useEffect(() => {
        getFetch();    
      
    }, [url])
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export {
    useFetch
}
