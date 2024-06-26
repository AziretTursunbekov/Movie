import { MyButton } from "./uiButton/MyButton";
import styled from "styled-components";

export function Main({
  movie,
  deleteMovieHandler,
  updateMovieHandler,
  openAndCloseModalHandler,
}) {
  return (
    <StyledMain>
      <h2>АКЫРКЫ ЧЫККАН     ТАСМАЛАР</h2>
      <StyledSection>
        {movie.map((item) => (
          <StyledDiv key={item.movieId}>
            <StyledImages src={item.movieImage} alt="Чон кыз" />
            <StyledArticle>
              <div>
                <StyledMovieTitle>{item.movieTitle}</StyledMovieTitle>
                <StyledMovieStatus>{item.movieStatus}</StyledMovieStatus>
              </div>
              <StyledWrapperBtn>
                <MyButton
                  title="Удалить"
                  className="buyBtn"
                  onClick={() => deleteMovieHandler(item.movieId)}
                >
                  Удалить
                </MyButton>
                <MyButton
                  variant={"update"}
                  onClick={() => openAndCloseModalHandler(item)}
                >
                  Изменить
                </MyButton>
              </StyledWrapperBtn>
            </StyledArticle>
          </StyledDiv>
        ))}
      </StyledSection>
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.main`
  padding: 30px;
`;
const StyledSection = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledArticle = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const StyledDiv = styled.div`
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;

  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
const StyledImages = styled.img`
  width: 250px;
`;
const StyledMovieTitle = styled.h4`
  font-size: larger;
`;
const StyledMovieStatus = styled.p`
  color: green;
  font-weight: 500;
`;
const StyledWrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
