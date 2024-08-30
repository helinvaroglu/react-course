import {useEffect} from 'react'

function Users() {

    // component should reach the data when it is mounted
    // fetch is used to reach data source
    // returns a Promise that resolves to the Response object, 
    // and you need to call .json() or .text() on the Response to extract the data.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((users) => console.log(users));
    }, []);

  return (
    <div>Users</div>
  )
}

export default Users