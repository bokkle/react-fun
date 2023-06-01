import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/ronaldo">Ronaldo</Link>
      <Link to="/users/messi">Messi</Link>
      <Link to="/users/br4gg">David Bragg</Link>
    </nav>
  );
};

export default Nav;
