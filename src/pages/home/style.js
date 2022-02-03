import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 1344px;
  margin: 0 auto;
`;

export const Main = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-gap: 40px;
  align-items: center;
  }
`;

export const Item = styled.div`

  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 30px;
  border: 1px solid black;

`;

export const Grid = styled.div`
 
display: grid;
margin-top: 50px;
grid-template-columns: 1fr 1fr 1fr 1fr;

`;
