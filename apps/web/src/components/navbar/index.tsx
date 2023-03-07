import Icon from 'react-inlinesvg';

import sushi from '@/assets/sushi.svg';

import './styles.scss';

const Navbar = () => {
  return (
    <header className="header-container">
      <Icon src={sushi} />
    </header>
  );
};

export default Navbar;
