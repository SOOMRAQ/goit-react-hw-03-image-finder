import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from 'components/IconButton';
import { StyledForm, StyledInput, StyledSearchbar } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    const { value } = event.currentTarget;
    this.setState({ imageName: value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { imageName } = this.state;
    if (imageName.trim() === '') {
      return toast.error('Image not found ;(', {
        theme: 'dark',
      });
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const { imageName } = this.state;
    return (
      <StyledSearchbar>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            value={imageName}
            onChange={this.handleNameChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <IconButton type="submit" aria-label="Search">
            <SearchIcon width="20" height="20" fill="#fff" />
          </IconButton>
        </StyledForm>
      </StyledSearchbar>
    );
  }
}
