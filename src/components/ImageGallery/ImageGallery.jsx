import { Component } from 'react';
import { nanoid } from 'nanoid';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Loader from '../Loader';
import Modal from '../Modal';
import { fetchImages } from '../../services/images-api';
import { StyledGallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    imageName: this.props.imageName,
    page: 1,
    images: [],
    error: null,
    pending: false,
    btnLoadMore: false,
    showModal: false,
    largeImageURL: '',
    imageAlt: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { imageName: prevImageName } = prevProps;
    const { imageName } = this.props;

    if (prevImageName !== imageName) {
      await this.setState({
        images: [],
        page: 1,
        imageName,
        pending: true,
        btnLoadMore: false,
        error: null,
      });
      await this.setGallery();
    }
  }

  setGallery = () => {
    const { imageName, page } = this.state;
    fetchImages(imageName, page)
      .then(images => {
        this.setState({ images: [...this.state.images, ...images] });
        if (images.length > 0) this.setState({ btnLoadMore: true });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ pending: false });
      });
  };

  loadNextPage = async () => {
    const nextPage = this.state.page + 1;
    await this.setState({
      page: nextPage,
      pending: true,
      btnLoadMore: false,
      error: null,
    });
    await this.setGallery();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imageLoading: true,
    }));
  };

  getLargeImage = (largeImageURL, imageAlt) => {
    this.toggleModal();
    largeImageURL
      ? this.setState({ largeImageURL })
      : this.setState({ largeImageURL: '' });
    imageAlt ? this.setState({ imageAlt }) : this.setState({ imageAlt: '' });
  };

  render() {
    const {
      images,
      pending,
      btnLoadMore,
      showModal,
      largeImageURL,
      imageAlt,
      error,
    } = this.state;
    return (
      <>
        {error ? (
          <h1>{error.message}</h1>
        ) : (
          <StyledGallery>
            {images.map(image => {
              const { webformatURL, tags, largeImageURL } = image;
              return (
                <ImageGalleryItem
                  key={nanoid()}
                  src={webformatURL}
                  alt={tags}
                  largeImageURL={largeImageURL}
                  getLargeImageURL={this.getLargeImage}
                />
              );
            })}
          </StyledGallery>
        )}
        {pending && <Loader />}
        {btnLoadMore && <Button onClick={this.loadNextPage} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <>
              <img src={largeImageURL} alt={imageAlt} />
            </>
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
