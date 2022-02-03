import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, InnerItem, CategoryDiv } from "./style";
import { ReactSVG } from 'react-svg';

export const SideBar = () => {
  const [sidebarCatList, setSidebarCatList] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/current_user`)
      .then((res) => {
        let data = res.data;
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
      .get(`http://localhost:5000/api/categories_from/${id}`)
      .then((res) => {
        let data = res.data;
        let catArr = [];
        data.forEach((category) => {
          catArr.push({
            catTitle: category.title,
            catId: category._id,
            sheetCt: category.sheets.length,
            icon: category.icon,
            authorId: category.createdBy,
            slug: category.slug,
          });
        });
        setSidebarCatList(catArr);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container>
      <div>
        <h3>All posts</h3>
        {[...sidebarCatList].map((category) => {
          let svg = require(`../../assets/icons/${category.icon}.svg`); 
          let IconPath = svg;
          return(
          <InnerItem>
            <ReactSVG src={IconPath} style={{marginRight: "10px",marginTop:"5px"}}/>
            <p>{category.catTitle}</p>
            <CategoryDiv><p>{category.sheetCt}</p></CategoryDiv>
          </InnerItem>
             );
            })}
        <div onClick={()=> window.location.href = '/category/new'} style={{cursor:'pointer'}}>
          <p>New Category</p>
        </div>
        <div onClick={()=> window.location.href = '/sheet/new'} style={{cursor:'pointer'}}>
          <p>New Blog</p>
        </div>
      </div>
    </Container>
  );
};
