import { Suspense, useEffect } from "react";
import css from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import NoContactsNotice from "../../components/NoContactsNotice/NoContactsNotice";
import AddContactNotice from "../../components/AddContactNotice/AddContactNotice";
import LoadError from "../../components/LoadError/LoadError";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.app}>
      <ContactForm />
      <SearchBox />
      <Suspense fallback={<Loader />}>
        {filteredContacts.length > 0 ? (
          <ContactList />
        ) : (
          !(loading || !!error) && !!allContacts.length && <NoContactsNotice />
        )}
        {allContacts.length === 0 && !(loading || !!error) && (
          <AddContactNotice />
        )}
        {error && <LoadError />}
      </Suspense>
      {loading && <Loader />}
    </div>
  );
};

export default ContactsPage;
