import Rating from '../Rating/Rating.js';

function DriverCard({ name, rating, img, car }) {
  const { model, licensePlate } = car;

  return (
    <div>
      <div>
        <img src={img} alt={name} className="driver-card-image" />
      </div>
      <div className="col-5 p-0 ms-2 justify-content-center align-items-start">
        <h4 className="m-0">
          <strong>{name}</strong>{' '}
        </h4>
        <Rating>{rating}</Rating>
        <p className="m-0">
          {model} - {licensePlate}{' '}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
