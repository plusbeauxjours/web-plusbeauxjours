import React, { ReactNode } from "react";
import styled from "../Styles/typed-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

interface IProps {
  children?: ReactNode;
  className?: string;
}

const Wrapper: React.FunctionComponent<IProps> = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default Wrapper;
