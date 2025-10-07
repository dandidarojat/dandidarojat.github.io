import styled from "styled-components";

const Container = styled.div`
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

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

const SocialMediaButton = styled.a`
  width: fit-content;
  display: flex;
  border: solid 1px;
  border-color: var(--color-jetblack);
  border-radius: 100rem;
  line-height: 0;
  div > svg {
    width: 2rem;
    height: 2rem;
    fill: var(--color-jetblack);
  }
  :hover {
    background-color: var(--color-jetblack);
    > svg {
      background-color: transparent;
      fill: var(--color-bonewhite);
    }
  }
`;

const SocialMediaIcon = styled.div`
  border-radius: 100rem;
  padding: 0.8rem;
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
        <SocialMediaWrapper>
          <SocialMediaButton
            target="_blank"
            href="https://linkedin.com/in/dandidaro"
          >
            <SocialMediaIcon>
              <svg>
                <path d="M16.422 3H3.62362C3.01879 3 2.53491 3.48387 2.53491 4.08871V16.9113C2.53491 17.4919 3.01879 18 3.62362 18H16.3737C16.9785 18 17.4623 17.5162 17.4623 16.9113V4.06452C17.5108 3.48388 17.0268 3 16.422 3ZM6.96235 15.75H4.76073V8.6129H6.96235V15.75ZM5.84944 7.62097C5.12364 7.62097 4.56717 7.04033 4.56717 6.33871C4.56717 5.6371 5.14783 5.05645 5.84944 5.05645C6.55105 5.05645 7.1317 5.6371 7.1317 6.33871C7.1317 7.04033 6.59944 7.62097 5.84944 7.62097ZM15.3091 15.75H13.1075V12.2903C13.1075 11.4677 13.0833 10.379 11.9463 10.379C10.7849 10.379 10.6156 11.2984 10.6156 12.2177V15.75H8.41392V8.6129H10.5672V9.60483H10.5913C10.9059 9.02417 11.6075 8.44355 12.6963 8.44355C14.9463 8.44355 15.3575 9.89517 15.3575 11.879V15.75H15.3091Z" />
              </svg>
            </SocialMediaIcon>
          </SocialMediaButton>
          <SocialMediaButton
            target="_blank"
            href="https://dribbble.com/dandidaro"
          >
            <SocialMediaIcon>
              <svg>
                <path d="M9.98633 2.16666C5.38576 2.16666 1.66675 5.88566 1.66675 10.4862C1.66675 15.0867 5.38576 18.8333 9.98633 18.8333C14.5868 18.8333 18.3334 15.0867 18.3334 10.4862C18.3334 5.88566 14.5868 2.16666 9.98633 2.16666ZM17.0662 10.7342C15.4408 10.624 13.7328 10.7892 12.0524 11.2025C11.8045 10.5413 11.5566 9.90774 11.2811 9.27407C13.0166 8.69558 14.642 7.84159 16.0469 6.82231C16.7081 7.89668 17.0662 9.16391 17.0662 10.5137C17.0937 10.5688 17.0662 10.6515 17.0662 10.7342ZM15.3031 5.80302C13.9808 6.79476 12.4106 7.59366 10.7301 8.11707C9.84858 6.35398 8.85683 4.86638 7.81001 3.70936C8.49875 3.48897 9.215 3.37878 9.98633 3.37878C12.1075 3.40632 14.0083 4.34296 15.3031 5.80302ZM6.59788 4.26032C7.64471 5.30716 8.63641 6.73966 9.518 8.4752C7.34168 8.99857 5.11028 9.08124 3.09926 8.72313C3.62267 6.79476 4.8899 5.19696 6.59788 4.26032ZM2.90641 9.93524C3.81551 10.1281 4.75216 10.2107 5.68879 10.2107C7.1213 10.2107 8.60891 10.0179 10.069 9.63224C10.3444 10.2382 10.6199 10.8719 10.8403 11.5331C8.41608 12.3044 6.26731 13.5165 4.55931 15.0867C3.54002 13.8196 2.90641 12.2217 2.90641 10.4862C2.90641 10.2934 2.90641 10.1281 2.90641 9.93524ZM5.44086 15.9407C7.01111 14.5082 9.02216 13.3787 11.2535 12.6901C11.3362 12.9656 11.4188 13.2411 11.5015 13.489C11.8596 14.7287 12.1351 15.9683 12.3279 17.1529C11.5841 17.4008 10.8127 17.5661 9.98633 17.5661C8.25077 17.5937 6.68053 16.9601 5.44086 15.9407ZM13.5125 16.6295C13.3197 15.5 13.0442 14.3154 12.7136 13.1308C12.6309 12.8553 12.5483 12.6074 12.4657 12.3319C13.9532 11.9738 15.4959 11.8361 16.9285 11.9187C16.5152 13.9573 15.2205 15.6377 13.5125 16.6295Z" />
              </svg>
            </SocialMediaIcon>
          </SocialMediaButton>
          <SocialMediaButton target="_blank" href="mailto:dandidaro@gmail.com">
            <SocialMediaIcon>
              <svg>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.3334 5.71374V14.875C18.3334 15.9105 17.4939 16.75 16.4584 16.75H3.54175C2.50621 16.75 1.66675 15.9105 1.66675 14.875V5.69498C1.66675 5.68643 1.66692 5.67792 1.66726 5.66945C1.68159 4.8831 2.32351 4.25 3.11335 4.25H16.8871C17.6858 4.25 18.3334 4.89747 18.3335 5.69624C18.3335 5.70207 18.3335 5.70791 18.3334 5.71374ZM2.91675 7.3225V14.875C2.91675 15.2202 3.19657 15.5 3.54175 15.5H16.4584C16.8036 15.5 17.0834 15.2202 17.0834 14.875V7.32289L11.0728 11.5142C10.4285 11.9636 9.57225 11.9636 8.92792 11.5142L2.91675 7.3225ZM17.0834 5.6905V5.69498V5.7028C17.0814 5.76461 17.0504 5.82202 16.9994 5.85754L10.3578 10.4889C10.1431 10.6387 9.85767 10.6387 9.64283 10.4889L3.00105 5.85738C2.94841 5.82068 2.91704 5.76057 2.91701 5.6964C2.91698 5.58794 3.00489 5.5 3.11335 5.5H16.8871C16.9936 5.5 17.0803 5.58476 17.0834 5.6905Z"
                />
              </svg>
            </SocialMediaIcon>
          </SocialMediaButton>
        </SocialMediaWrapper>
      </Wrapper>
      <Accent />
    </Container>
  );
}

export default Hero;
