
import React, { Component } from "react";
import { nanoid } from "nanoid";


const initValues = {
  name: '',
  number: '',
}

function Child({ user, foo }) {
  const handleClick = () => {
    foo(user)
  };
  return (
    <>
      <button onClick={handleClick} type="button">REMOVE</button>
    </>
  )
}

export class App extends Component {
  inputIdName = nanoid();
  inputIdNumber = nanoid();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    ...initValues,

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.addContatcs()
    this.setState(initValues)
  }

  addContatcs = () => {
    const { contacts, name, number } = this.state
    const newName = name.toLowerCase();
    let nameOnList = false


    const newContact = { id: nanoid(), name: name, number: number };

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newName) {
        alert(`${contact.name} is already in contacts`);
        nameOnList = true
      }
    });
    if (nameOnList === false) {
      return this.setState(prevState => ({
        contacts: prevState.contacts.concat(newContact),
      }))
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }
  toRemove = (userToRemove) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((user) => user.name !== userToRemove),
    }))
  }
  ToFind = (evt) => {
    const searchValue = evt.target.value
    const newContacts = this.state.contacts.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))

    console.log(searchValue)
  }

  //   APIData.filter((item) => {
  //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  // })
  //   const newPacientes = pacientes.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase()))
  //   setPacientes(newPacientes)
  // }, [searchValue])
  render() {
    const { contacts, filter } = this.state
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputIdName}>Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            id={this.inputIdName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
          <label htmlFor={this.inputIdNumber}>Number</label>
          <input
            onChange={this.handleChange}
            value={this.state.number}
            id={this.inputIdNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" >
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <label>Find contacts by name </label>
        <input type="text" value={filter} onChange={this.ToFind}></input>
        <ul>
          {contacts.map((user) => (

            <li key={user.id}> {user.name}: {user.number}<Child key={user.id} user={user.name} foo={this.toRemove} /> </li>

          ))}
        </ul>
      </div>
    );
  }

}

// return <child> </child> <li key={user.id}> {user.name}: {user.number}
// </li>