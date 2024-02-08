import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const UserPicture = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  margin-right: 1rem;
`;

export const NameText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 25px;
  color: #ffffff;
`

export const Progress = styled.div`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({percentual}) => percentual}%;
    height: 6px;
    border-radius: 3px;
    background-color: #23DD7A;
  }
`