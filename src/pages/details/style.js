import styled from "styled-components";

export const Container = styled.div`
  max-width: 1344px;
  margin: 0 auto;

  pre {
    color: white;
    background-color: #2b2b2b;
    padding: 1px 3px;
    font-size: 0.875rem;
    border-radius: 5px;
    padding: 2rem;
    border-radius: 8px;
  }

  .hljs {
    background: #2b2b2b;
    color: #f8f8f2;
  }

  /* Comment */
  .hljs-comment,
  .hljs-quote {
    color: #d4d0ab;
  }

  /* Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #ffa07a;
  }

  /* Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #f5ab35;
  }

  /* Yellow */
  .hljs-attribute {
    color: #ffd700;
  }

  /* Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #abe338;
  }

  /* Blue */
  .hljs-title,
  .hljs-section {
    color: #00e0e0;
  }

  /* Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #dcc6e0;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  @media screen and (-ms-high-contrast: active) {
    .hljs-addition,
    .hljs-attribute,
    .hljs-built_in,
    .hljs-bullet,
    .hljs-comment,
    .hljs-link,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-params,
    .hljs-string,
    .hljs-symbol,
    .hljs-type,
    .hljs-quote {
      color: highlight;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      font-weight: bold;
    }
  }
`;

export const Main = styled.main`
  margin-top: 50px;
  width: 100%;
  display: grid;
  margin-left: 10px;
  grid-template-columns: 100px 900px 200px;
  grid-gap: 40px;
  justify-content:center;
 
 
  }
`;

export const CategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
