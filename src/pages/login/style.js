import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .authLanding {
    h1 {
      margin-top: 0;
      text-align: center;
    }

    .loginError {
      text-align: center;
      margin-bottom: 1rem;
    }

    .labelContainer {
      font-size: 0.875rem;
      margin-bottom: 3px;
      width: 100%;
      max-width: 275px;

      ul {
        margin: 0 0 0.25rem;
        padding: 0 0 0 1rem;
      }
    }

    .inputContainer {
      width: 250px;
      margin-bottom: 0.75rem;

      input {
        width: 100%;
        height: 30px;
        padding-left: 8px;
        padding-right: 8px;
        border: 1px solid #333;
        border-radius: 3px;
        font-size: 1rem;
      }
    }

    .buttonContainer {
      width: 270px;
      button {
        width: 100%;
        padding: 5px;
      }
    }
  }
`;
