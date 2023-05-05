import { FooterWrapper, Text, Link } from "../styles/footer";

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>@Diny</Text>
      <Text>
        Reference:{" "}
        <Link
          href="https://www.artst.org/famous-artists/"
          target="_blank"
          rel="noreferrer"
        >
          Artst
        </Link>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;
