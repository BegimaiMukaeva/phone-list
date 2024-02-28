import React, { useState , useEffect} from 'react';
import ContactsList from './components/ContactsList/ContactList';
import ContactDetails from './components/ContactDetails/ContactDetails';
import Modal from './components/Modal/Modal';
import SearchBar from "./components/SearchBar/SearchBar";
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  const editContact = contact => {
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const saveContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setIsModalOpen(false);
  };

  return (
      <div className="app">
        <h1 className="title">Oracle Digital</h1>
        <SearchBar onSearch={setSearchTerm} />
        <ContactsList contacts={filteredContacts} searchTerm={searchTerm} editContact={editContact} />
        <Modal isShowing={isModalOpen} hide={() => setIsModalOpen(false)}>
          <ContactDetails contact={currentContact} onSave={saveContact} onCancel={() => setIsModalOpen(false)} />
        </Modal>
      </div>
  );
};

export default App;
