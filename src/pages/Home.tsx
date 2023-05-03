import { useEffect } from "react";
import { useDataStore } from "../store/artistDataStore";
import {
  HomeContainer,
  ImageWrapper,
  HomeTitle,
  Artist,
  ArtistTitle,
  StyledLink,
  ArtistText,
} from "../styles/home";
import HomeCard from "../components/HomeCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [artistsData, fetchArtistsData, loading, error] = useDataStore(
    (state) => [
      state.artistsData,
      state.fetchArtistsData,
      state.loading,
      state.error,
    ]
  );

  useEffect(() => {
    fetchArtistsData();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Artist Gallery</HomeTitle>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <ImageWrapper>
          {artistsData.map((artist) => (
            <StyledLink to={`/${artist.name}`} key={artist.name}>
              <Artist>
                <HomeCard images={artist.images.slice(0, 2)} />
                <HomeCard images={artist.images.slice(2, 4)} />
                <ArtistTitle className="artist-name">{artist.name}</ArtistTitle>
                <ArtistText>Click to see all</ArtistText>
              </Artist>
            </StyledLink>
          ))}
        </ImageWrapper>
      )}
    </HomeContainer>
  );
};

export default Home;
