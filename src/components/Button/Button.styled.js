import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: inline-block;
  background-color: rgba(178, 34, 34, 1);
  border: none;
  color: white;
  padding: 10px;
  min-width: 200px;
  margin: 30px 0px;
  cursor: pointer;
  transition: background-color 500ms ease;

  &:hover {
    background-color: rgba(178, 34, 34, 0.7);
  }
`;
