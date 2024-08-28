import {useState, useEffect} from 'react';

import "./styles.css";

import List from './List/index.js';
import Form from './Form/index.js';


function Contacts() {
    const [contacts, SetContacts] = useState([]);


    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact={SetContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;