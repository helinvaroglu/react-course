import {useState, useEffect} from 'react';

import List from './List/index.js';
import Form from './Form/index.js';


function Contacts() {
    const [contacts, SetContacts] = useState([]);


    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <List />
            <Form addContact={SetContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;