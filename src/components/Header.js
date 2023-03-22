import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className='m-3' >
      <h1 >{ title }</h1>
    </header>
  )
};

Header.defaultProps = {
  title: 'Counter App'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;