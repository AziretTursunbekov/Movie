import styled from "styled-components";

export const MyButton = ({ children, className, onClick, variant }) => {
  return (
    <StyledBtn className={className} onClick={onClick} variant={variant}>
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  /* width: ${(props) => (props.title === "Смотреть 30 дней за 1с" ? 300 : "")};
  height: ${(props) => (props.title === "Смотреть 30 дней за 1с" ? 40 : "")}; */
  /* background-color: blueviolet; */
  padding: 5px;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  font-size: 14px;
  font-weight: 600;

  background-color: ${({ variant }) =>
    variant === "delete"
      ? "orange"
      : variant === "add"
      ? "black"
      : "blueviolet"};
`;
