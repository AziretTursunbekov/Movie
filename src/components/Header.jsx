import styled from "styled-components";
import { MyButton } from "./uiButton/MyButton";

function Header({ openAndCloseModalHandler }) {
  return (
    <StyleHeader>
      <StyledImages src="https://shorturl.at/TjVav" alt="logo" />
      <StyledNav>
        <StyledUrl href="#">Фильмы</StyledUrl>
        <StyledUrl href="#">Сериалы</StyledUrl>
        <StyledUrl href="#">Мультфильмы</StyledUrl>
        <StyledUrl href="#">Windows</StyledUrl>
        <StyledUrl href="#">Календарь</StyledUrl>
      </StyledNav>
      <div>
        <MyButton
          title="Смотреть 30 дней за 1с"
          variant="delete"
          className="watch_movie"
        >
          Смотреть 30 дней за 1с
        </MyButton>
      </div>
      <div>
        <MyButton
          className="logoBtn"
          variant={"add"}
          onClick={openAndCloseModalHandler}
        >
          Добавить
        </MyButton>
      </div>
    </StyleHeader>
  );
}

export default Header;

const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;
const StyledImages = styled.img`
  width: 130px;
`;
const StyledUrl = styled.a`
  color: white;
  font-weight: 900;
`;
