import logoVisa from '../../assets/images/visa.png';
import logoMaster from '../../assets/images/master-card.png';

function CreditCard({
  className,
  bgColor,
  type,
  expirationMonth,
  expirationYear,
  owner,
  bank,
  number,
}) {
  let month = 0;
  if (expirationMonth < 10) {
    month = '0' + expirationMonth;
  } else {
    month = expirationMonth;
  }

  let year = String(expirationYear).slice(-2);
  let lastNumber = String(number).slice(-4);

  let colorText = 'black';
  let logo = logoMaster;

  if (type === 'Visa') {
    colorText = 'white';
    logo = logoVisa;
  }

  return (
    <div style={{ backgroundColor: `${bgColor}`, color: `${colorText}` }}>
      <div className="d-flex align-items-end flex-column">
        <img src={logo} alt={type} className="w-25" />
      </div>
      <h4>•••• •••• •••• {lastNumber}</h4>
      <div>
        <div>
          <p>
            Expires: {month}/{year}{' '}
          </p>
        </div>
        <div>
          <p>{bank} </p>
        </div>
        <p>{owner} </p>
      </div>
    </div>
  );
}

export default CreditCard;
