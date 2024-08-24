function User(props) {
    return (
        <div>
            {props.isLoggedIn 
                ? `${props.name} ${props.surname}` 
                : "You are not logged in."
            }
        </div>
    );
}

export default User;