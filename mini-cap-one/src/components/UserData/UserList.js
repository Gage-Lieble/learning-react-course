import UserCard from "./UserCard"

const UserList = (props) => {
    return (
        <div>
            
            {props.list.map(user => <UserCard name={user.name} age={user.age} key={Math.random()}/> )}
            
        </div>
    )
}

export default UserList