import { useLikeButtonStore } from "../store/likeButtonStore";
import {
  CardImage,
  CardText,
  ImageCardContainer,
  LikeButton,
} from "../styles/imageCard";

interface Image {
  id: number;
  workImage: string;
  workLink: string;
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
      <CardImage src={image.workLink} alt={image.workImage} loading="lazy" />
      <CardText>{image.workImage}</CardText>
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
