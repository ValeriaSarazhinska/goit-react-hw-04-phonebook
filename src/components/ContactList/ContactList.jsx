import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContact, deleteContact }) => {
  return (
    <ul className={css.list}>
      {filteredContact.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <button
              className={css.button}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  filteredContact: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
