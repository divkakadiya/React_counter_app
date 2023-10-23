import React, { useState } from 'react'

const Counter = () => {
    const getCount = JSON.parse(sessionStorage.getItem('count'))
    const [value, setValue] = useState(getCount || 0)
    sessionStorage.setItem('count', value)

    return (
        <React.Fragment>
            <div className='counter'>
                <h1>{value}</h1>
                <button onClick={() => setValue(value + 1)}>Increment</button>
                <button onClick={() => value != 0 ? setValue(value - 1) : value}>Decrement</button>
            </div>
        </React.Fragment>
    )
}
export default Counter
