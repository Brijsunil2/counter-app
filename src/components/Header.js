import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className='p-3 px-5 bg-light'>
      <header className='p-1 border-bottom border-gray' >
        <a href="." className='h3 text-decoration-none'>{ title }</a>
      </header>
    </div>
  )
};

Header.defaultProps = {
  title: 'Counter App'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;