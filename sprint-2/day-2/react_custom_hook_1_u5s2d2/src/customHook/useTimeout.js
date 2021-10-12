import { useEffect, useState } from "react"


export const useTimeout = (seconds) => {
    const [ready, setReady] = useState(false)
    console.log('ready:', ready)

    useEffect(() => {
        const id = setTimeout(() => {
            setReady(true)
        }, seconds)

    }, [seconds]);

    return {ready}
}