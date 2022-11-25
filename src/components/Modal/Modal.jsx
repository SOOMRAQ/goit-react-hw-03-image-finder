import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModalBackdrop, StyledModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickBackdrop = ({ target, currentTarget }) => {
    target === currentTarget && this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <StyledModalBackdrop onClick={this.handleClickBackdrop}>
        <StyledModalContent className="Modal">{children}</StyledModalContent>
      </StyledModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
