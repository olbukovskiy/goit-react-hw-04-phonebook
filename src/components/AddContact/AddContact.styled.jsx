import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormField = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 0;
  width: 560px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 4px;
  border: 1px solid;
  border-color: rgba(33, 33, 33, 0.2);
  font-size: 18px;
  font-weight: 500;

`;

export const FormInput = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 4px;
  border: 1px solid;
  border-color: rgba(33, 33, 33, 0.2);
  font-size: 18px;
  font-weight: 500;

`;

export const Button = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
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
