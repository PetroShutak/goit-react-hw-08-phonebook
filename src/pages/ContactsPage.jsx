// import Contacts from "components/Contacts/Contacts";
import ContactsForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

const ContactsPage = () => {
    return (
        <div>
        <ContactsForm />
        <Filter />
        <ContactList />
        </div>
    );
    }

export default ContactsPage;