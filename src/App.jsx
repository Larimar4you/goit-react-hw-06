import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
