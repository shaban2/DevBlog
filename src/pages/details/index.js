import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Main, CategoryColumn } from "./style";
import twitterIcon from "../../assets/twitter-icon.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linked-in.png";
import { SideBar } from "../../components/sidebar";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";


export const DetailPage = () => {
  const { userId, sheetTitle } = useParams();
  const [catTitle, setCatTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/${userId}/sheet/${sheetTitle}`)
      .then((sheetRes) => {
        let sheetData = sheetRes.data;

        axios
          .get(
            `http://localhost:5000/api/${userId}/category/id/${sheetData.category}`
          )
          .then((catRes) => {
            let catData = catRes.data;
            setCatTitle(catData.title);
            setDate(catData.dateCreated);
          })
          .catch((err) => {
            console.log(err);
          });
        setMarkdown(sheetData.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sheetTitle, userId]);

  const getHTML = () => {
    marked.setOptions({
      langPrefix: "hljs language-",
      highlight: function (code) {
        return hljs.highlightAuto(code, [
          "bash",
          "c",
          "csharp",
          "css",
          "html",
          "java",
          "javascript",
          "json",
          "markdown",
          "perl",
          "php",
          "python",
          "r",
          "ruby",
          "rust",
          "scss",
          "sql",
          "swift",
          "txt",
          "typescript",
          "vbnet",
          "yaml",
        ]).value;
      },
    });

    let rawMarkup = marked(markdown);
    let cleanMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: cleanMarkup };
  };

  let sheetContent = <div dangerouslySetInnerHTML={getHTML()} />;

  return (
    <Container>
      <Main>
        <CategoryColumn>
          <div>
            <img
              src={twitterIcon}
              alt="twitter icon"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <img
              src={githubIcon}
              alt="twitter icon"
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <img
              src={linkedinIcon}
              alt="twitter icon"
              style={{ height: 30, width: 30 }}
            />
          </div>
        </CategoryColumn>

        <div>
          <p>
            {catTitle} {date}
          </p>
          {sheetContent}
        </div>
        <CategoryColumn>
          <SideBar />
        </CategoryColumn>
      </Main>
    </Container>
  );
};
