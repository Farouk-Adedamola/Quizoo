import { Fragment } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";
import { Button } from "../Components/Style";

const Login = () => {
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <h1>Welcome Back</h1>
          <p>Please enter valid information</p>
          <Section>
            <form action="">
              <input placeholder="Email..." type="email" />
              <input placeholder="Password..." type="password" />
              <Linked>forgot password ?</Linked>
              <LoginButton type="submit">Log in</LoginButton>
            </form>
            <Or>
              <span></span> OR <span></span>
            </Or>
          </Section>
        </Container>
        <Icons>
          <p>
            <FaSquareFacebook />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaSquareXTwitter />
          </p>
        </Icons>
        <BgProp></BgProp>
        <Onboard>
          <p>Dont have an account? </p>
          <SignupLink>Sign up</SignupLink>
        </Onboard>
      </Wrapper>
    </Fragment>
  );
};

export default Login;

const Wrapper = styled.section`
  background: #635f5fab;
  color: #fff;
  width: 90%;
  margin: 1rem auto;
  border-radius: 15px;
  padding: 16px 12px;

  h1:nth-child(1) {
    font-size: 30px;
  }
  h1,
  p {
    text-align: center;
  }

  p {
    font-size: 13px;
  }
  p:nth-child(1) {
    font-size: 12px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  ${media.greaterThan("")`

`}
`;

const Section = styled.div`
  form {
    margin: 1rem;
    input {
      padding: 16px 8px;
      background: transparent;
      border: 2px solid var(--color-gradient-2);
      margin-top: 18px;
      border-radius: 10px;
      color: #fff;
      width: 100%;
      outline: none;
    }

    input:nth-child(2) {
      margin-top: 32px;
    }
  }
`;

const LoginButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 1.6rem 0;
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  span {
    background: var(--color-gradient-2);
    height: 3px;
    width: 100%;
    border-radius: 1.5px;
    margin: 0 15px 0 15px;
  }
`;

const Linked = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  margin: 3px 0;
  font-size: 14px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 5rem;
  margin: 0 auto;
  align-items: end;
  padding: 25px 0;
  color: var(--color-gradient-2);

  p:nth-child(1),
  p:nth-child(3) {
    font-size: 20px;
  }

  p:nth-child(2) {
    font-size: 20px;
  }
`;

const BgProp = styled.div`
  background: var(--color-gradient-1);
  width: 20px;
  height: 29px;
  border-radius: 30px;
  margin-left: 15px;
`;
const Onboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const SignupLink = styled(Link)`
  color: var(--color-dark-green);
  text-decoration: none;
  margin: 0 3px;
  font-size: 14px;
  font-weight: 700;
`;
