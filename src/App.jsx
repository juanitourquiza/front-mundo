import Cover from "./components/Cover";
import "./App.css";
import MessageCentered from "./components/MessageCentered";
import ImageCentered from "./components/ImageCentered";
import FormWithImage from "./components/FormWithImage";
import Carussel from "./components/Carrusel";
import MyAccordion from "./components/MyAccordion";




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cover />
        <MessageCentered message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut" />
        <ImageCentered />
        <Carussel />
        <MyAccordion />
        <FormWithImage />
      </div>
    </>
  );
}

export default App;
