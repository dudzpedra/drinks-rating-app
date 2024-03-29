import { useEffect, useState } from "react";

const usePesistedState = (key: string, initialState: any) => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
}

export default usePesistedState