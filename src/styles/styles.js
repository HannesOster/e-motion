import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  background-color: #d9daff;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
const NavigationContainer = styled.nav`
  border: 4px solid #d9daff;
  position: fixed;
  bottom: 10px;
  height: 100px;
  width: 95%;
  left: 10;
  right: 10;
  display: flex;
`;

const ImageContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 15px;
`;
const ButtonContainer = styled.section`
  border-right: 4px solid #d9daff;
  display: flex;
  height: 100%;
  width: 33%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #2f1f40;
`;

export {
  Header,
  NavigationContainer,
  ImageContainer,
  ButtonContainer,
  NavLink,
};
