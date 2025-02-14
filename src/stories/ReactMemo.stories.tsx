import {memo, useState} from "react";
import {number} from "prop-types";

export default {
    title: "React.memo demo",

}

export const NewMessagesCounter = (props: {count: number}) => {
    console.log("MessageCounter")
    return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: string[] }) => {
    console.log("USERS")
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )

}

const Users = memo(UsersSecret)
const Messages = memo(NewMessagesCounter)

export const Example1 = () => {
    console.log("EXAMPLE")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    return (
        <>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={()=> {
                const newUsers = [...users, "Sveta" + new Date().getTime()]
                setUsers(newUsers)
            }}>addUser</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}