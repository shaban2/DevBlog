import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 80px;
  margin-bottom: 40px;
  flex-direction: column;
`;

export const Button = styled.button`
  color: "";
  background: white;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  width: 53%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 50%;
  height: 5px;
  display: block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 3px;
`;

export const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  padding: 1rem;
  border: 1px solid gray;
  text-align: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 0 0.5rem 1rem;
  background-color: white;

  div {
    text-align: center;
    width: 100%;
    margin: 14px 0 10px;
    pointer-events: none;
  }

  .iconName {
    margin: 0;
    font-size: 0.875rem;
    color: gray;
    pointer-events: none;
  }

  
   .selectedIcon {
      border: 3px solid gray;
      cursor: pointer;
      transition: ease-in 0.2s;
      margin-top: -2px;
      margin-left: calc(0.5rem - 2px);
      margin-bottom: calc(1rem - 2px);
      margin-right: calc(0.5rem - 2px);
   }
  
`;
export const IconsWrap = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 -0.5rem;
`;

export const IconDiv = styled.div`
  margin-bottom: 0;
  display: flex;
  justify-content: center;
 

  
`;