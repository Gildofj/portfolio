import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.button)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 60px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;
