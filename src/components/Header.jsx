import PropTypes from 'prop-types';

function Header({ text }) {
  const hStyles = {
    backgroundColor: '#00223e',
    color: '#fff',
  };
  return (
    <header style={hStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
