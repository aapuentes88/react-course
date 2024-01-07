import CrudApi from "./components/Crud/CrudApi";
import CrudApp from "./components/Crud/CrudApp";
import FetchPro from "./components/FetchPro/FetchPro";
import ContactForm from "./components/Form/ContactForm";
import { Modals } from "./components/Modals/Modals";
import Selects from "./components/Selects/Selects";
import SongSearch from "./components/SongSearch/SongSearch";

function App() {
  return (
    <>
      <h1>Ejercicios</h1>
      <hr/>
      <FetchPro />
      <hr/>
      <Modals />
      <hr/>
      <ContactForm />
      <hr/>
      <Selects />
      <hr/>
      <SongSearch />
      <hr/>
      <CrudApi />
      <hr/>
      <CrudApp />

    </>
  );
}

export default App;
