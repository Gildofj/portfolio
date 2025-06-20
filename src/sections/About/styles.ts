import { Section } from "@components/_UI/Section";
import { motion } from "motion/react";
import styled from "styled-components";

export const Container = styled(Section)`
  gap: 2rem;
`;

export const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-indent: 1rem;
  text-align: justify;

  @media screen and (max-width: 400px) {
    max-width: 22rem;
  }
`;
