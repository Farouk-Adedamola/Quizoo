import { Fragment } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Components/Style";
// import media from "styled-media-query";
import { generateMedia } from "styled-media-query";
const styledBreakPoints = generateMedia({
  mobile: "500px",
  tablet: "1050px",
  desktop: "1250px",
});

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  p {
    font-size: 16px;
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
