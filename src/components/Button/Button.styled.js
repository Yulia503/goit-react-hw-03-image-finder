import styled from 'styled-components';
export const StyledBtnLoadMore = styled.button`

  padding: 8px 16px;
  border-radius: 15px;
  background-color: #404BBF;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  color: #fff;
border: none; 

  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #31D0AA;
      color: #000;
  }
`;
