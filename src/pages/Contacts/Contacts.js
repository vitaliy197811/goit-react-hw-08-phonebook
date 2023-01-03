import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import css from './Contacts.module.css';

const Contacts = () => (
    <div className={css.phonebook}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />
        <h3 className={css.contacts}>Contacts</h3>
        <Filter />
        <ContactList />
    </div>
);

export default Contacts;