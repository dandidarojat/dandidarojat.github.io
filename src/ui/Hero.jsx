import styled from "styled-components";

const Container = styled.div`
  /* min-h-screen min-w-full lg:w-auto content-center place-items-center */
  align-content: center;
  place-items: center;
  min-height: 100vh;
  min-width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  gap: 1rem;
`;

const TopText = styled.p`
  font-weight: 300;
`;

const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 7.5rem;
  line-height: 1;
  letter-spacing: -0.4rem;
`;

const Accent = styled.div`
  /* bg-yellow w-96 h-96 absolute rounded-full opacity-10 m-auto left-0 right-0 top-0 bottom-0 blur-3xl -z-50 */
  background-color: var(--color-yellow);
  width: 35rem;
  height: 35rem;
  position: absolute;
  border-radius: 99rem;
  opacity: 0.1;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  filter: blur(4rem);
`;

function Hero() {
  return (
    <Container>
      <Wrapper>
        <TopText>
          Hello, I'm{" "}
          <a
            className="link"
            href="https://linkedin.com/in/dandidaro"
            target="_blank"
          >
            Dandi
          </a>{" "}
          🙌🏻
        </TopText>
        <StyledH1>
          Digital Designer & <br /> Frontend Web Developer
        </StyledH1>
        <p>
          I love the process of crafting minimalist and pixel-perfect products
          from scratch
        </p>
      </Wrapper>
      <Accent />
    </Container>
  );
}

export default Hero;
