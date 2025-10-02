import { NavLink } from "react-router";
import styled from "styled-components";

const NavContainer = styled.div`
  width: fit-content;
`;

const NavLinkContainer = styled.nav`
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 4rem;
  z-index: 999;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.5rem;
  width: fit-content;

  background-color: var(--color-bonewhite);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-md);
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 1.5rem;
  height: fit-content;

  background-color: var(--color-bonewhite);
  border-radius: 0.5rem;

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    font-weight: 600;
    background-color: var(--color-lightgray);
    color: var(--color-jetblack);
  }
`;

function Navigation() {
  return (
    <NavContainer>
      <NavLinkContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/works">Works</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavLinkContainer>
    </NavContainer>
  );
}

export default Navigation;
