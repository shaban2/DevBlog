import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import devImage from "../../assets/image.jpg";
import { SideBar } from "../../components/sidebar";
import { MainContainer, Main, Grid, Item } from "./style";
import { format, parseISO } from "date-fns";
import { Container, Row, Col } from "react-awesome-styled-grid";

export const Home = () => {
  // const [catTitle, setCatTitle] = useState();
  const [sheets, setSheets] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/current_user`)
      .then((res) => {
        let data = res.data;
        setName(data[0].name);
        // console.log(pageTitle)
        data.map((res) => {
          return setId(res._id);
        });
        // console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:5000/api/${id}/sheets_by_author`)
      .then((res) => {
        let data = res.data;
        setSheets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <MainContainer>
      <Main>
        <img
          src={devImage}
          alt="Head Shot"
          style={{ height: "100%", width: "80%" }}
        />

        <div>
          <h1>{name}</h1>
          <p>Front End Developer</p>
        </div>
        <div>
          <SideBar />
        </div>
      </Main>
      <div style={{ marginBottom: "50px" }} />
      {[...sheets].map((sheet) => {
        return (
          <Container>
            <Row>
              <Col
                debug
                xs={2}
                
                style={{ border: "1px solid black", backgroundColor: "white" }}
              >
                <p>{format(parseISO(sheet.dateCreated), "dd.MM.yyyy")}</p>
                <p style={{ textAlign: "center", paddingTop: 15 }}>
                  <Link to={`/${sheet.createdBy}/sheet/${sheet.slug}`}>
                    {sheet.title}
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        );
      })}
      <div style={{ marginBottom: "50px" }} />
    </MainContainer>
  );
};
