import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // Contidional class
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  //   Another option is conditional styles
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? '#000' : '#fff',
  //         color: reverse ? '#fff' : '#000',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
