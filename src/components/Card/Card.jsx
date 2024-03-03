import CardDog from 'react-bootstrap/Card';
import Tags from '../Tags/Tags';
import './Card.css'


export default function Card({ urlImagen, nombre, descripcion, raza, color }) {
  return (
    <div className="col">
      <CardDog className="h-100">
        <CardDog.Img variant="top" src={urlImagen} />
        <CardDog.Body className="d-flex flex-column">
          <CardDog.Title>{nombre}</CardDog.Title>
          <CardDog.Text>{descripcion}</CardDog.Text>
          <Tags raza={raza} color={color} />
        </CardDog.Body>
      </CardDog>
    </div>
  );
}
 