import { ArtistImage, HomeCardComponent } from "../styles/homeCard";

interface HomeCardProps {
  images: {
    imgName: string;
    imgLink: string;
  }[];
}

const HomeCard = ({ images }: HomeCardProps) => {
  return (
    <HomeCardComponent>
      {images.map(({ imgName, imgLink }) => (
        <ArtistImage key={imgName} src={imgLink} alt={imgName} loading="lazy" />
      ))}
    </HomeCardComponent>
  );
};

export default HomeCard;
