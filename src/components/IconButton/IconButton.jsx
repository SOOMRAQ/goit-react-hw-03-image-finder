import PropTypes from 'prop-types';
import { StyledButton } from './IconButton.styled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <StyledButton type="button" onClick={onClick} {...allyProps}>
    {children}
  </StyledButton>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
export default IconButton;

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
