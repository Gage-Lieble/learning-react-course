import './UserCard.css'

const UserCard = (props) => {
    return (
        <div className="card-wrap">
            <div>{props.name}</div>
            <div>Age: {props.age}</div>    
        </div>
    )
}

export default UserCard