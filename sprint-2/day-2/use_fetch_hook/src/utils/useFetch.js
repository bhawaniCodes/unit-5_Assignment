import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                setData(res.items)
            })
            .catch((err) => {
                setLoading(false)
                setError(true);
            })
    }, [url])

    return {loading, error, data}
}