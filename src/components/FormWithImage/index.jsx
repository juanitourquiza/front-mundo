import "./index.css"; // Puedes crear un archivo CSS para estilizar tu componente
import ContactForm from "../ContactForm"; // Reemplaza 'YourFormComponent' con el nombre de tu formulario
import yourImage from "../../assets/contact.png"; // Reemplaza 'your-image.jpg' con la ruta de tu imagen

function FormWithImage() {
  return (
    <>
      <div className="form-with-image-container">
        <div className="form-container">
        <ContactForm />
        </div>
        <div className="image-container">
          <img src={yourImage} alt="Imagen" />
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default FormWithImage;
