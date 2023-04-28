import { useLikeButtonStore } from "../store/likeButtonStore";
import {
  CardImage,
  CardText,
  ImageCardContainer,
  LikeButton,
} from "../styles/imageCard";

interface Image {
  id: number;
  imgName: string;
  imgLink: string;
}
interface ImageProps {
  image: Image;
}

const ImageCard = ({ image }: ImageProps) => {
  const [likedCardIds, toggleLike] = useLikeButtonStore((state) => [
    state.likedCardIds,
    state.toggleLike,
  ]);
  const isSelected = likedCardIds.includes(image.id);

  return (
    <ImageCardContainer>
      <CardImage src={image.imgLink} alt={image.imgName} />
      <CardText>{image.imgName}</CardText>
      <LikeButton
        onClick={() => {
          toggleLike(image.id);
        }}
        isSelected={isSelected}
      >
        &#9829;
      </LikeButton>
    </ImageCardContainer>
  );
};

export default ImageCard;
