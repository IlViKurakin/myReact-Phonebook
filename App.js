import './App.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { useEffect, useState } from 'react';


function App() {
  // Состояния (стейты)
  const [contacts, setContacts] = useState(()=> {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) :
    [
      {id: 1, name: 'Paolo Bokhan', number: '+7 999 333 1212'},
      {id: 2, name: 'Dmitry Melnikoff', number: '+7 999 111 1010'},
      {id: 3, name: 'Nikita Terganoff', number: '+7 123 444 5566'},
      {id: 4, name: 'Dany Bukreeff', number: '+7 000 111 5577'},
    ];
  });
  const [filter, setFilter] = useState('');
  // Изменение рендера в реактиве (хук useEffect)
  useEffect(()=> {localStorage.setItem('contacts', JSON.stringify(contacts));}, [contacts]);
  // Функция для добавления контактов
  const addContact = (newContact)=> {
    if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [... prevContacts, newContact]);
  }
  // Функция для удаления контактов
  const deleteContact = (contactID)=> {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactID));
  }
  // Функция фильтрации
  const changeFilter = (event)=> {
    setFilter(event.target.value);
  }
  // Функция для формирования списка контактов
  const getVisibleContacts = ()=> {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  }
  // Переменная для вывода списка контактов в рендер
  const visibleContacts = getVisibleContacts();

  // Рендеринг контента
  return (
    <div class="phonebook">
      <h1>PhoneBook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts: </h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
