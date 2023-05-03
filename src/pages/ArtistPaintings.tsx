import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ImageCard from "../components/ImageCard";
import NotFound from "../components/NotFound";
import { useDataStore } from "../store/artistDataStore";
import {
  ImageCardWrapper,
  PaintingsContainer,
  SourceLink,
  SourceLinkWrapper,
  Title,
} from "../styles/artistPaintings";

const ArtistPaintings = () => {
  let { name } = useParams();
  const artistsData = useDataStore((store) => store.artistsData);

  const filterArtistPaintings = artistsData.filter(
    (artist) => artist.name === name
  );

  return (
    <PaintingsContainer>
      <BackButton />
      {filterArtistPaintings.length > 0 ? (
        <div>
          <Title>Paintings by {filterArtistPaintings[0].name}</Title>
          <ImageCardWrapper>
            {filterArtistPaintings[0].images.map((image) => (
              <ImageCard key={image.imgName} image={image} />
            ))}
          </ImageCardWrapper>
          <SourceLinkWrapper>
            <SourceLink
              href={filterArtistPaintings[0].source}
              target="_blank"
              rel="noreferrer"
            >
              Go to Source
            </SourceLink>
          </SourceLinkWrapper>
        </div>
      ) : (
        <NotFound />
      )}
    </PaintingsContainer>
  );
};

export default ArtistPaintings;
