import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background-color: var(--color-gradient-2);
  color: #000;
  text-decoration: none;
  padding: 1rem 1rem;
  border-radius: 0.7rem;
  width: 100%;
  text-align: center;
  margin-top: 0.8rem;
`;
