import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 320px;
  line-height: 44px;

  color: #ffffff;
`;

export const TitleLogin = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 320px;
  margin-bottom: 1.5rem;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  width: 320px;
  margin-bottom: 2rem;
  line-height: 25px;
`;

export const ForgetText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  width: 320px;
  line-height: 18px;

  color: #e5e044;
`;

export const CreateText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  width: 320px;
  line-height: 18px;
  margin-left: 6rem;
  color: #e23d74;
`;
