import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

export default function App() {
  const perritos = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      nombre: 'Bartolo',
      descripcion:'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!',
      raza: 'Mixta',
      colorTag: 'success',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600',
      nombre: 'Messi',
      descripcion:'Es jugetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!',
      raza: 'Carlino',
      colorTag: 'primary',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
      nombre: 'Gohan',
      descripcion:'Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!',
      raza: 'Corgi galés de Pembroke',
      colorTag: 'danger',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=600',
      nombre: 'Princesa',
      descripcion:'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!',
      raza: 'Springer Spaniel inglés',
      colorTag: 'warning',
    },
  ];

  return (
    <>
      <Header titulo="Adopta un Perrito" />

      <main className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {perritos.map((perrito) => (
          <Card
            key={perrito.id}
            urlImagen={perrito.url}
            nombre={perrito.nombre}
            descripcion={perrito.descripcion}
            raza={perrito.raza}
            color={perrito.colorTag}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}


