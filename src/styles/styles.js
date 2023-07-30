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
  border-top: 4px solid #d9daff;
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  left: 0;
`;

const ImageContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 15px;
`;
const ButtonContainer = styled.section`
  border-left: 4px solid #d9daff;
  height: 100%;
  width: 33%;
`;
export { Header, NavigationContainer, ImageContainer, ButtonContainer };
