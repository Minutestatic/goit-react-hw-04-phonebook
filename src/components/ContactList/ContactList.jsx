import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => {
  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <ul className={css['contact-list']}>
      {contacts.map(contact => (
        <li className={css['contact-list-item']} key={contact.id}>
          {contact.name}: {contact.number}
          <div>
            <button
              className={css['contact-list-button']}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
