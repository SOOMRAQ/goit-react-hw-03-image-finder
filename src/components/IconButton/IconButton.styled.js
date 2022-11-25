import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;

  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  border: none;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: firebrick;
  cursor: pointer;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.03);
  }
`;
