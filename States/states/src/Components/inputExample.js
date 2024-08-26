import {useState} from 'react'

// Example for input state definition

function InputExample() {
    const [form, setForm] = useState({name: "", surname: ""});


    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }
  return (
    <div>
        Please enter a name: <br></br>
        <input value={form.name} onChange={onChangeInput}></input>
        <br></br>
        Please enter a surname: <br></br>
        <input value={form.surname} onChange={onChangeInput}></input>
        <br></br>
        
    </div>
  )
}

export default InputExample