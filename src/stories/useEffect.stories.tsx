import {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log("simpleExample")

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
            fake: {fake}
            <button onClick={() => setFake(fake + 1)}>+</button>
        </>
    )
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    const [time, setTime] = useState(new Date())


    useEffect(() => {

        setInterval(() => {
            setCounter((prevState) => prevState + 1)
        }, 1000)
    }, []);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, []);


    return (
        <>
            Hello, {counter} -- fake {fake}
            <div>
                {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
            </div>
        </>
    )
}