import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import { movies } from "./utils/constants";
import { ModalUi } from "./components/modal/ModalUi";
import { MyButton } from "./components/uiButton/MyButton";
import styled from "styled-components";

function App() {
  const [movie, setMovie] = useState(movies);
  const [openModal, setOpenModal] = useState(false);

  const [movieImage, setMovieImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieStatus, setMovieStatus] = useState("");
  const [updateModal, setUpdateModal] = useState(null);

  const deleteMovieHandler = (id) => {
    const remainderMovie = movie.filter((item) => item.movieId !== id);
    setMovie(remainderMovie);
  };

  const openAndCloseModalHandler = (movie = null) => {
    console.log(movie);
    setOpenModal(!openModal);
    if (movie) {
      setMovieImage(movie.movieImage);
      setMovieStatus(movie.movieStatus);
      setMovieTitle(movie.movieTitle);
      setUpdateModal(movie.movieId);
    } else {
      setMovieImage("");
      setMovieStatus("");
      setMovieTitle("");
      setUpdateModal(null);
    }
  };

  const handleMovieImageChange = (e) => {
    setMovieImage(e.target.value);
  };

  const handleMovieTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleMovieStatusChange = (e) => {
    setMovieStatus(e.target.value);
  };

  const addMovie = () => {
    if (!movieImage || !movieStatus || !movieTitle) {
      alert("Please write a movie");
      return;
    }
    const newMovie = {
      movieImage: movieImage,
      movieTitle: movieTitle,
      movieStatus: movieStatus,
      movieId: updateModal || Date.now(),
    };
    setMovie([...movie, newMovie]);
    openAndCloseModalHandler();
    setMovieImage("");
    setMovieTitle("");
    setMovieStatus("");

    if (updateModal) {
      setMovie(
        movie.map((item) => (item.movieId === updateModal ? newMovie : item))
      );
    } else {
      setMovie([...movie, newMovie]);
    }
  };

  return (
    <div>
      {openModal && (
        <ModalUi onClose={openAndCloseModalHandler}>
          <wrapper_inputs>
            <StyledModalInput
              type="text"
              placeholder="Ссылка на фото"
              onChange={handleMovieImageChange}
              value={movieImage}
            />
            <StyledModalInput
              type="text"
              placeholder="Название фильма"
              onChange={handleMovieTitleChange}
              value={movieTitle}
            />
            <StyledModalInput
              type="text"
              placeholder="Статус"
              onChange={handleMovieStatusChange}
              value={movieStatus}
            />
          </wrapper_inputs>
          <wrapper_buttons>
            <MyButton className="buyBtn" onClick={openAndCloseModalHandler}>
              Отменить
            </MyButton>
            <MyButton className="buyBtn" onClick={addMovie}>
              Добавить
            </MyButton>
          </wrapper_buttons>
        </ModalUi>
      )}
      <Header openAndCloseModalHandler={openAndCloseModalHandler} />

      <Main
        movie={movie}
        deleteMovieHandler={deleteMovieHandler}
        openAndCloseModalHandler={openAndCloseModalHandler}
      />
      <Footer />
    </div>
  );
}

export default App;

const StyledModalInput = styled.input`
  width: 360px;
  height: 50px;
  font-size: larger;
  border-radius: 10px;
  padding-left: 10px;
`;

const wrapper_inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const wrapper_buttons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  margin-top: 20px;
`;
