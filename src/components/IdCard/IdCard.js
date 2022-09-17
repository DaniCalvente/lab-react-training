function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  //let date = birth.toDateString();

  return (
    <div>
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p>
          <strong>First name:</strong> {firstName}
        </p>

        <p>
          <strong>Last name:</strong> {lastName}
        </p>

        <p>
          <strong>Gender:</strong> {gender}
        </p>

        <p>
          <strong>Height:</strong> {height / 100}m
        </p>

        <p>
          <strong>Birth:</strong> {birth.toDateString()}{' '}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
