function Stars({ value }) {
  const stars = Math.round(value);

  let rating = '☆☆☆☆☆';

  console.log();

  if (stars === 1) {
    rating = '★☆☆☆☆';
  } else if (stars === 2) {
    rating = '★★☆☆☆';
  } else if (stars === 2) {
    rating = '★★☆☆☆';
  } else if (stars === 3) {
    rating = '★★★☆☆';
  } else if (stars === 4) {
    rating = '★★★★☆';
  } else if (stars === 5) {
    rating = '★★★★★';
  }

  return <h3>{rating}</h3>;
}

export default Stars;
