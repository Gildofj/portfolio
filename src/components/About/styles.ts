import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 6rem;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
  background: url("/assets/me.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(255, 255, 255 / 30%);
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: ${imageAnimation} 8s ease-in-out infinite 1s;
`;

export const Name = styled.h2`
  font-size: 3.125em;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.purple_600}
`;

export const DescriptionProfile = styled.p`
  font-size: 1.250em;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.h1`
  font-size: 5em;
  font-weight: 800;
  background: rgb(114,14,158);
  background: -moz-linear-gradient(90deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 80%);
  background: -webkit-linear-gradient(90deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 80%);
  background: linear-gradient(90deg, rgba(114,14,158,1) 0%, rgba(128,0,128,1) 80%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#720e9e",endColorstr="#800080",GradientType=1);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Text = styled.h3`
  font-size: 3.125em;
  font-weight: 600;
`;
