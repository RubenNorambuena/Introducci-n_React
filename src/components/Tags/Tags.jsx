import Button from 'react-bootstrap/Button';

export default function Tags({ raza, color }) {
  return (
    <div className="d-grid mt-auto">
      <Button href="#" variant={color} size="sm">
        {raza}
      </Button>
    </div>

  );
}

