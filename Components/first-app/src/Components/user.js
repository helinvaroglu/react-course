import PropTypes from "prop-types";

function User({name, surname, isLoggedIn, friends, address}) {
   
    if (!isLoggedIn) {
        return <div>You are not logged in.</div>    //early return
    }

    return (
        <>
            <h1>{`${name} ${surname}` }</h1>

            {address.title} {address.zip}

            {
                friends.map((friend, index) => (
                <div key={index}>
                    {index} - {friend}
                </div>
            ))}

        </>
    );
}

// propType is for determining the prop's type and isRequired is for showing required props.
// sending multiple types in one prop, use oneOfType. Ex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
      title: PropTypes.string,
      zip: PropTypes.number,
    })
}
  
// for a default value of a prop
User.defaultProps = {
isLoggedIn: false,
}

export default User;