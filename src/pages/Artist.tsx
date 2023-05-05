import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ImageSlider from "../components/ImageSlider";
import { useDataStore } from "../store/artistDataStore";
import {
  ArtistContainer,
  ArtistDescription,
  ArtistDetails,
  ArtistImage,
  ArtistTitle,
  SourceLink,
  SourceLinkWrapper,
} from "../styles/artist";
import NotFound from "../components/NotFound";

const Artist = () => {
  let { name } = useParams();
  const artistsData = useDataStore((store) => store.artistsData);

  const filterArtistPaintings = artistsData.filter(
    (artist) => artist.name === name
  );

  return (
    <ArtistContainer>
      <BackButton />
      {filterArtistPaintings.length > 0 ? (
        <>
          <ArtistTitle>{filterArtistPaintings[0].name}</ArtistTitle>
          <ArtistDetails>
            <ArtistImage
              src={filterArtistPaintings[0].image}
              alt={filterArtistPaintings[0].name}
            />
            <ArtistDescription>
              {filterArtistPaintings[0].description}
            </ArtistDescription>
          </ArtistDetails>
          <SourceLinkWrapper>
            <SourceLink
              href={filterArtistPaintings[0].source}
              target="_blank"
              rel="noreferrer"
            >
              GO TO SOURCE
            </SourceLink>
          </SourceLinkWrapper>
          <ImageSlider slides={filterArtistPaintings[0].works} />
        </>
      ) : (
        <NotFound />
      )}
    </ArtistContainer>
  );
};

export default Artist;
