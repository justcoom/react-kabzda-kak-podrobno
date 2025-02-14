import {memo, useCallback, useMemo, useState} from "react";
import {number} from "prop-types";


export default {
    title: "use memo demo",

}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(4)
    const [b, setB] = useState(5)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const UsersSecret = (props: { users: string[] }) => {
    console.log("USERS SECRET")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )

}

const Users = memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>
            {counter}
            <Users users={newArr}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "Js", "HTML"])

    const newArr = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])

    const addBook = useMemo(() => {
        return () => {
            const newUsers = [...books, "Angular " + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    //ТОЖЕ САМОЕ ТОЛЬКО С UseCallback

    const addBook2 = useCallback(() => {
        const newUsers = [...books, "Angular " + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            {counter}
            <Book books={newArr} addBook={addBook}/>
        </>
    )
}

type BooksPropsType = {
    books: string[]
    addBook: () => void
}

export const Books = (props: BooksPropsType) => {
    console.log("BOOKS")
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
        </div>
    )
}

const Book = memo(Books)