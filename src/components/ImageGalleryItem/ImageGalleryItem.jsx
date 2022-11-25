import PropTypes from 'prop-types';
import {
  StyledGalleryImage,
  StyledGalleryItem,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, largeImageURL, getLargeImageURL }) => {
  return (
    <StyledGalleryItem
      onClick={() => {
        getLargeImageURL(largeImageURL, alt);
      }}
    >
      <StyledGalleryImage src={src} alt={alt} />
    </StyledGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  getLargeImageURL: PropTypes.func,
};

export default ImageGalleryItem;
