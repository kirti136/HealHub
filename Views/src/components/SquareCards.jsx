import styles from "./SquareCards.module.css";
import PropTypes from "prop-types";

function SquareCards({ CardDetails }) {
  return (
    <>
      {CardDetails.map((element, index) => (
        <div className={styles.IndividualCard} key={index}>
          <div style={{ backgroundColor: element.color }}>
            <img src={element.image} alt={element.data1} />
          </div>
          <div>
            <p>{element.data1}</p>
            <p>{element.data2}</p>
          </div>
        </div>
      ))}
    </>
  );
}

SquareCards.propTypes = {
  CardDetails: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      data1: PropTypes.string.isRequired,
      data2: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SquareCards;
