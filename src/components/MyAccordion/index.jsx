
function MyAccordion() {
  const accordionData = [
    {
      id: 1,
      title: 'Pregunta 1',
      content: 'Respuesta a la pregunta 1.',
    },
    {
      id: 2,
      title: 'Pregunta 2',
      content: 'Respuesta a la pregunta 2.',
    },
    {
      id: 3,
      title: 'Pregunta 3',
      content: 'Respuesta a la pregunta 3.',
    },
  ];

  return (
    <div className="accordion" id="myAccordion">
      <h1>Preguntas Frecuentes (FAQs)</h1>
      {accordionData.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded="false"
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#myAccordion"
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyAccordion;
