import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const Container = styled.div``;

export const blogSheet = styled.div``;

export const SheetTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 80px;
  margin-bottom: 40px;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 52.5%;
  height: 50px;
  background: white;

  font-size: 14px;
  border-color: black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5px;
  border-radius: 3px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    height: 30px;
    padding: 0px 2px 1px;
  }
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

export const TextArea = styled.textarea`
  width: 50%;
  height: 300px;
  display: block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  background: white;
  border-color: black;
  border-radius: 3px;
`;
