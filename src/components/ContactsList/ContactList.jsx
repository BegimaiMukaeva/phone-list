import React, { useState } from 'react';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, searchTerm, editContact}) => {
    const [sortKey, setSortKey] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (key) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const filteredContacts = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const sortedContacts = [...contacts].sort((a, b) => {
        const valueA = a[sortKey].toString().toLowerCase();
        const valueB = b[sortKey].toString().toLowerCase();

        if (sortOrder === 'asc') {
            return valueA.localeCompare(valueB);
        } else {
            return valueB.localeCompare(valueA);
        }
    });

    return (
        <div className={styles.contactsList}>
            {filteredContacts.length > 0 ? (
                <table className={styles.contactsList}>
                    <thead className={styles.contactsList__head}>
                    <tr className={styles.contactsList__row}>
                        <th className={styles.contactsList__header}>№</th>
                        <th className={`${styles.contactsList__header} ${sortKey === 'name' ? styles['contactsList__header--active'] : ''}`} onClick={() => handleSort('name')}>Name</th>
                        <th className={`${styles.contactsList__header} ${sortKey === 'username' ? styles['contactsList__header--active'] : ''}`} onClick={() => handleSort('username')}>Username</th>
                        <th className={`${styles.contactsList__header} ${sortKey === 'email' ? styles['contactsList__header--active'] : ''}`} onClick={() => handleSort('email')}>Email</th>
                        <th className={`${styles.contactsList__header} ${sortKey === 'phone' ? styles['contactsList__header--active'] : ''}`} onClick={() => handleSort('phone')}>Phone</th>
                        <th className={styles.contactsList__header}>Actions</th>
                    </tr>
                    </thead>
                    <tbody className={styles.contactsList__body}>
                    {sortedContacts.map((contact, index) => (
                        <tr className={styles.contactsList__row} key={contact.id}>
                            <td className={styles.contactsList__cell}>{index + 1}</td>
                            <td className={styles.contactsList__cell}>{contact.name}</td>
                            <td className={styles.contactsList__cell}>{contact.username}</td>
                            <td className={styles.contactsList__cell}>{contact.email}</td>
                            <td className={styles.contactsList__cell}>{contact.phone}</td>
                            <td className={styles.contactsList__cell}>
                                <button className={styles.contactsList__editBtn} onClick={() => editContact(contact)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className={styles.searchTerm}>
                    Нет результатов поиска для запроса "{searchTerm}"
                </div>
            )}
        </div>


    );
};

export default ContactsList;
