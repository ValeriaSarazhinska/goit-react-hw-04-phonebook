import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const duplicate = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (duplicate) return alert(`${data.name} is already in contacts`);

    setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <Notification message="There is no contacts" />
      ) : (
        <div>
          <Filter onFilterChange={handleFilter} value={filter} />
          <ContactList
            filteredContact={filteredContact}
            deleteContact={deleteContact}
          />
        </div>
      )}
    </>
  );
};
