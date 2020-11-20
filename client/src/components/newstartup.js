import React, {useRef} from 'react'

const NewStartup = ({createStartup}) => {
    const input = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

        createStartup(input.current.value)
        input.current.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={input}/>
            <input type="submit"/>
        </form>
    )
}

export default NewStartup