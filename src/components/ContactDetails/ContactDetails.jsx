import React, { useState, useEffect } from 'react';
import styles from './ContactDetails.module.css';

const ContactDetails = ({ contact, onSave, onCancel }) => {
    const [editContact, setEditContact] = useState({ ...contact });

    useEffect(() => {
        setEditContact({ ...contact });
    }, [contact]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name.includes('.')) {
            const [key, subkey] = name.split('.');
            setEditContact(prev => ({
                ...prev,
                [key]: {
                    ...prev[key],
                    [subkey]: value
                }
            }));
        } else {
            setEditContact(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(editContact);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.contactDetails}>
            <div className={styles.contactDetailsFieldset1}>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Name:</label>
                    <input type="text" name="name" value={editContact.name || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>

                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Username:</label>
                    <input type="text" name="username" value={editContact.username || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>

                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Email:</label>
                    <input type="email" name="email" value={editContact.email || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>

                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Phone:</label>
                    <input type="text" name="phone" value={editContact.phone || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>

                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Website:</label>
                    <input type="text" name="website" value={editContact.website || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
            </div>


            <fieldset className={styles.contactDetailsFieldset}>
                <legend className={styles.contactDetailsLegend}>Address:</legend>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Street:</label>
                    <input type="text" name="address.street" value={editContact.address?.street || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Suite:</label>
                    <input type="text" name="address.suite" value={editContact.address?.suite || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>City:</label>
                    <input type="text" name="address.city" value={editContact.address?.city || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Zipcode:</label>
                    <input type="text" name="address.zipcode" value={editContact.address?.zipcode || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
            </fieldset>

            <fieldset className={styles.contactDetailsFieldset}>
                <legend className={styles.contactDetailsLegend}>Company:</legend>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Name:</label>
                    <input type="text" name="company.name" value={editContact.company?.name || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>Catch Phrase:</label>
                    <input type="text" name="company.catchPhrase" value={editContact.company?.catchPhrase || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsField}>
                    <label className={styles.contactDetailsLabel}>BS (Business Slogan):</label>
                    <input type="text" name="company.bs" value={editContact.company?.bs || ''} onChange={handleChange} className={styles.contactDetailsInput} />
                </div>
                <div className={styles.contactDetailsActions}>
                    <button type="submit" className={styles.contactDetailsSaveBtn}>Save Changes</button>
                    <button type="button" onClick={onCancel} className={styles.contactDetailsCancelBtn}>Cancel</button>
                </div>
            </fieldset>
        </form>

    );
};

export default ContactDetails;
