import { ArtistImage, HomeCardComponent } from "../styles/homeCard";

interface HomeCardProps {
  works: {
    id: number;
    workImage: string;
    workLink: string;
  }[];
}

const HomeCard = ({ works }: HomeCardProps) => {
  return (
    <HomeCardComponent>
      {works.map(({ id, workImage, workLink }) => (
        <ArtistImage key={id} src={workLink} alt={workImage} loading="lazy" />
      ))}
    </HomeCardComponent>
  );
};

export default HomeCard;
