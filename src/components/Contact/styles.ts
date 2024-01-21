import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4em;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: ${({ theme }) => theme.lineHeight.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const CardContact = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem;
  gap: 0.5rem;
  padding: 1.2rem 3rem;
  background: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  span > svg {
    color: ${({ theme }) => theme.colors.text};
    fill: ${({ theme }) => theme.colors.text};
  }
`;

export const WriteMeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 1rem;
  line-height: 1;
  transition: 0.2s;

  span > svg {
    transition: 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    span > svg {
      transform: translateX(5px);
      color: ${({ theme }) => theme.colors.primary};
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
    max-width: 20rem;
  }
`;

export const FieldGroup = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 2rem;
`;

export const Error = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 0.5rem;
`;

export const FieldError = styled.span`
  color: ${({ theme: { colors } }) => colors.alert};
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
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.primary};
  z-index: 10;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.75rem;
  background-color: ${({ theme: { colors } }) => colors.background};
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;
`;

export const Message = styled.textarea`
  font-family: "Inter";
  padding: 1.25rem;
  width: 100%;
  min-height: 10rem;
  border-radius: 0.75rem;
  -webkit-border-radius: 0.75rem;
  -moz-border-radius: 0.75rem;
  overflow: hidden;
  resize: none;
  background-color: ${({ theme: { colors } }) => colors.background};
  border: 1px solid ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 0.8rem 2rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  column-gap: 1rem;
  transition: 0.2s;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.text};

  span > svg {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors.text};
    fill: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};

    span > svg {
      color: ${({ theme }) => theme.colors.primary};
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const Type = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
