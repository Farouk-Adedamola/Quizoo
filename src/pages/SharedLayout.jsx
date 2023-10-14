import { useState, useEffect, Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(loading);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [loading]);

  return (
    <Fragment>
      {loading ? (
        <Wrapper>
          <h1>Quizoo ...</h1>
        </Wrapper>
      ) : (
        <Container>
          <Onboard>
            <LinksContainer>
              <ActiveLink to="login">
                Login
                <div></div>
              </ActiveLink>

              <ActiveLink to="signup">
                Signup
                <div></div>
              </ActiveLink>
            </LinksContainer>
            <Line></Line>
          </Onboard>
        </Container>
      )}
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  h1 {
    color: var(--color-gradient-1);
    text-align: center;
    margin: 0 auto;
    height: auto;
    width: auto;
  }
`;

const Container = styled.div`
  padding: 1.2rem;
`;

const Onboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

const Line = styled.div`
  height: 0.3rem;
  background: #fff;
  border-radius: 5px;
  width: 80%;
`;

const ActiveLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;

  &.active {
    font-size: 20px;
    color: red;
  }
`;
