function User({name, surname, isLoggedIn, friends}) {
    return (
        <>
            <h1>{isLoggedIn 
                ? `${name} ${surname}` 
                : "You are not logged in."
            }</h1>

            {
                friends.map((friend, index) => (
                <div key={index}>
                    {index} - {friend}
                </div>
            ))}

        </>
    );
}

export default User;