import React from 'react'
import { useFetch } from '../utils/useFetch'

export const Github = () => {
    const { loading, data, error } = useFetch(
        "https://api.github.com/search/users?q=masai&per_page=5"
    );


    return loading ? ("...loading") : error ? ("Something went wrong") : (
        <div>
            {data.map((e, i) => {
                return <div key={ i}>{ e.login}</div>
            })}
        </div>
    )
}
