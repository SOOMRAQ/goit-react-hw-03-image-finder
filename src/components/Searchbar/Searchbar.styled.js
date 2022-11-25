import styled from '@emotion/styled';

export const StyledSearchbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledInput = styled.input`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 7px 10px;
  min-width: 250px;
  color: #fff;
  outline: none;
`;
