import styled from "styled-components";

export const Container = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 4rem;
 margin: 7rem 0;
`;

export const ContactContainer = styled.div`
 display: flex;
 gap: 3rem;
`;

export const ContactTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CardContact = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  gap: 0.5rem;
  padding: 1rem 3rem;
  background: rgb(114,14,158);
  background: -moz-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: -webkit-linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  background: linear-gradient(150deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);
`;

export const CardContactIcon = styled.i`
  font-size: 2rem;
`;

export const WriteMeButton = styled.a`
  margin-top: 1rem;
  &:hover {
    color: ${({ theme: { colors } }) => colors.purple_400};
  }
`;

export const Form = styled.form`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 2rem;
`;

export const FieldGroupArea = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 10rem;
`;

export const FormTag = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: 0.9rem;
  padding: 0.25rem;
  background-color: ${({ theme: { colors } }) => colors.background_800};
  color: ${({ theme: { colors } }) => colors.purple_300};
  z-index: 10;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  border-radius: 0.625rem;
  background-color: ${({ theme: { colors } }) => colors.background_800};
  border: 1px solid ${({ theme: { colors } }) => colors.purple_300};
  z-index: 1;
`;

export const Message = styled.textarea`
  padding: 1.2rem;
  width: 100%;
  min-height: 10rem;
  border-radius: 0.625rem;
  -webkit-border-radius: 0.625rem; 
  -moz-border-radius: 0.625rem; 
  overflow: hidden; 
  resize: none; 
  background-color: ${({ theme: { colors } }) => colors.background_800};
  border: 1px solid ${({ theme: { colors } }) => colors.purple_300};
`;

export const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 0.625rem;
  border: 1px solid #1d1160;
  column-gap: 1rem;
  transition: .2s;
  cursor: pointer;
  background: rgb(29,17,96);
  background: -moz-linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
  background: linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1d1160",endColorstr="#4b0082",GradientType=1);
    

  &:hover {
    transform: scale(1.1);
    background: rgb(51,0,111);
    background: -moz-linear-gradient(90deg, rgba(51,0,111,1) 0%, rgba(114,14,158,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(51,0,111,1) 0%, rgba(114,14,158,1) 100%);
    background: linear-gradient(90deg, rgba(51,0,111,1) 0%, rgba(114,14,158,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33006f",endColorstr="#720e9e",GradientType=1);
  }
  &:active {
    transform: scale(.99);
  }
`;

export const ButtonIcon = styled.i`
  font-size: 1.5rem;
`;

export const Type = styled.span`
  font-weight: 600;
`;