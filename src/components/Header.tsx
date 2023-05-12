import { HeaderContainer, Logo, NavBar, StyledLink } from "../styles/header";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="./logo.png" />
      <NavBar>
        <StyledLink to="/art-galleria/">Home</StyledLink>
        <StyledLink to="/art-galleria/favourites">Favourites</StyledLink>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
