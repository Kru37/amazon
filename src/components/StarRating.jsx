
import { FaStar } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';
import { GiWhiteBook } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div>
      {[...Array(filledStars)].map((star, i) => {
        return <FaStar key={i} />;
      })}
      {[...Array(emptyStars)].map((star, i) => {
        return <BsStar key={i} />;
      })}
      <GiWhiteBook />
    </div>
  );
};

export default StarRating;