import {useEffect} from 'react'

import axios from 'axios';

// axios has wider web support and it returns a jso object
// more preferable
// only changing keyword 'fetch' with 'axios'

function Users() {

    // component should reach the data when it is mounted
    // fetch is used to reach data source
    // returns a Promise that resolves to the Response object, 
    // and you need to call .json() or .text() on the Response to extract the data.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json()) // fetch's res is a body not a json so you need to convert
            .then((users) => console.log(users));
    }, []);

  return (
    <div>Users</div>
  )
}

export default Users