import {
  NotFoundContainer,
  NotFoundSymbol,
  NotFoundText,
  LinkText,
  StyledLink,
} from "../styles/notFound";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundSymbol>404</NotFoundSymbol>

      <NotFoundText>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <LinkText>
          Let's go <StyledLink to="/">home</StyledLink> and try from there.
        </LinkText>
      </NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
