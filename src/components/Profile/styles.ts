import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 15rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const imageAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

export const Image = styled.div`
  background: url("/portfolio/assets/images/me.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(255, 255, 255 / 30%);
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: ${imageAnimation} 8s ease-in-out infinite 1s;
  transition: 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const AnchorImage = styled(motion.a)`
  height: 320px;
  display: flex;
  align-items: flex-end;
`;

export const Name = styled(motion.h2)`
  font-size: 3.125rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.purple_600};

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const DescriptionProfile = styled(motion.p)`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled(motion.h1)`
  font-size: 5em;
  font-weight: 800;
  background: rgb(114, 14, 158);
  background: -moz-linear-gradient(
    90deg,
    rgba(114, 14, 158, 1) 0%,
    rgba(128, 0, 128, 1) 80%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(114, 14, 158, 1) 0%,
    rgba(128, 0, 128, 1) 80%
  );
  background: linear-gradient(
    90deg,
    rgba(114, 14, 158, 1) 0%,
    rgba(128, 0, 128, 1) 80%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const WelcomeText = styled(motion.h3)`
  font-size: 3.125rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

interface ButtonProps {
  transparent?: boolean;
}

export const Button = styled(motion.a)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1rem;
  min-width: 11rem;
  border-radius: 0.625rem;
  border: 1px solid #2c0080;
  cursor: pointer;
  transition: 0.2s;
  ${({ transparent, theme: { colors } }) =>
    transparent
      ? `background: ${colors.transparent}`
      : ` background: rgb(29,17,96);
      background: -moz-linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
      background: -webkit-linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
      background: linear-gradient(90deg, rgba(29,17,96,1) 0%, rgba(75,0,130,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2C0080",endColorstr="#4b0082",GradientType=1);
    `};

  &:hover {
    transform: scale(1.1);
    background: rgb(51, 0, 111);
    background: -moz-linear-gradient(
      90deg,
      rgba(51, 0, 111, 1) 0%,
      rgba(114, 14, 158, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(51, 0, 111, 1) 0%,
      rgba(114, 14, 158, 1) 100%
    );
    background: linear-gradient(
      90deg,
      rgba(51, 0, 111, 1) 0%,
      rgba(114, 14, 158, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#33006f",endColorstr="#720e9e",GradientType=1);
  }
  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 768px) {
    min-width: 15rem;
    padding: 1.5rem;
    font-size: 1.25rem;
    border-radius: 1rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SocialIcon = styled.i`
  font-size: 3rem;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme: { colors } }) => colors.purple_200};
  }

  &:active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple_200};
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
