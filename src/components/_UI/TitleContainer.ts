import { motion } from "motion/react";
import styled from "styled-components";

export const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-top: 7rem;
  }
`;
