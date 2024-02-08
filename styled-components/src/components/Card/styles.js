import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3B4651;
  position: relative;
  margin-bottom: 1.5rem;
`
export const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5em;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 16px;
    color: antiquewhite;
  }
`

export const UserPicture = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid #ffffff;
`

export const PostInfo = styled.div`

  margin-bottom: 1rem;

  h4 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 22px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

`


export const HasInfo = styled.div`

  margin-top: 1rem;

  h4 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    line-height: 22px;
  }

`