import { useLikeButtonStore } from "../store/likeButtonStore";
import { useDataStore } from "../store/artistDataStore";
import BackButton from "../components/BackButton";
import Pagination from "../components/Pagination";
import { usePaginationStore } from "../store/paginationStore";
import ImageCard from "../components/ImageCard";
import {
  FavouritesContainer,
  ImageWrapper,
  NoImageText,
  Title,
} from "../styles/favourites";

const Favourites = () => {
  const artistsData = useDataStore((store) => store.artistsData);
  const likedCardIds = useLikeButtonStore((state) => state.likedCardIds);
  const [currentPage, updateCurrentPage, recordsPerPage] = usePaginationStore(
    (state) => [
      state.currentPage,
      state.updateCurrentPage,
      state.recordsPerPage,
    ]
  );

  let likedImages: any[] = [];
  artistsData.map((data) => {
    const images = data.works.filter((image) =>
      likedCardIds.includes(image.id)
    );
    if (images.length > 0) likedImages.push(...images);
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = likedImages.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const numberOfPages = Math.ceil(likedImages.length / recordsPerPage);

  return (
    <FavouritesContainer>
      <BackButton />
      <Title>Favourites Paintings</Title>
      <ImageWrapper>
        {likedImages.length > 0 ? (
          currentRecords.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))
        ) : (
          <NoImageText>
            There is no favourite images. Please select some!
          </NoImageText>
        )}
      </ImageWrapper>
      {numberOfPages > 1 ? (
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      ) : (
        ""
      )}
    </FavouritesContainer>
  );
};

export default Favourites;
