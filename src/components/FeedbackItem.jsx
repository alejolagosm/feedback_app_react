import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

import PropTypes from 'prop-types';

function FeedbackItem({ item, handleDelete }) {
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('This is an example of a feedback item');

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
