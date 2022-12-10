import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
`;
export const Number = styled.span`
  font-weight: 400;
`;

export const TextField = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
`;

export const Button = styled.button`
  display: block;
  width: 80px;
  height: 36px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.88;
  text-align: center;
  letter-spacing: 0.06em;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 4px;
  border-color: transparent;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
  }
`;
