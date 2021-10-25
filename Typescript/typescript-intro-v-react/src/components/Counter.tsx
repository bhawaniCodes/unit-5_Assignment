
import React, { useState } from 'react'
import { Button } from './Button'

export const Counter = (): JSX.Element => {
    const [count, setCount] = useState<number>(0)

    const increment = (): void => {
        setCount(count+1)
    }
    const decrement = (): void => {
        setCount(count-1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <Button label="Increment" onClick={increment }></Button>
            <Button label="Decrement" onClick={ decrement}></Button>
        </div>
    )
}
