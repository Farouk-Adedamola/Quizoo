import { Fragment } from "react";
import styled from "styled-components";
import { Button } from "../Components/Style";
import { generateMedia } from "styled-media-query";
const styledBreakPoints = generateMedia({
  mobile: "500px",
  tablet: "1050px",
  desktop: "1250px",
});

const Container = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  ${styledBreakPoints.greaterThan("tablet")`
  height: 100vh;
  `}

  p {
    font-size: 16px;
    color: #fff;
    ${styledBreakPoints.lessThan("mobile")`
    font-size: 12px;
    `}
  }
`;

const Home = () => {
  return (
    <Fragment>
      <Container>
        <p>Play and take quiz challenges together with your friends</p>
        <Button to="sharedlayout">Get started</Button>
      </Container>
    </Fragment>
  );
};

export default Home;
