import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  SheetTitle,
  Input,
  TextArea,
  Wrapper,
  Select,
} from "./style";
import axios from "axios";
import slug from "slug";

export const NewBlog = () => {
  const [content, setContent] = useState(`# Heading 1`);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Select");
  const [allCategories, setAllCategories] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/current_user`)
      .then((res) => {
        let data = res.data;

        data.map((res) => {
          return setId(res._id);
        });
        // console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
    if (id !== "") {
      axios
        .get(`http://localhost:5000/api/categories_from/${id}`)
        .then((res) => {
          let data = res.data;
          // console.log(data);
          let catArr = [];
          data.forEach((category) => {
            catArr.push({ catTitle: category.title, catId: category._id });
          });
          setAllCategories(catArr);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [allCategories, id]);

  const handleSaveClick = () => {
    let userId = id;
    let titleSlug = slug(title);
    const data = { category, title, content, userId, titleSlug };

    axios
      .post("http://localhost:5000/api/add_sheet", data)
      .then((res) => {
        // TODO: Go to created sheet page
        window.location = `/${userId}/sheet/${titleSlug}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCategorySelectChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setContent(e.target.value);
  };

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const categoriesSelection = (
    <Select
      name="category"
      value={category}
      onChange={handleCategorySelectChange}
    >
      <option value="Select">Select</option>
      {[...allCategories].map((category) => {
        return (
          <option value={category.catId} key={category.catTitle}>
            {category.catTitle}
          </option>
        );
      })}
    </Select>
  );

  return (
    <Wrapper>
      <Container>
        <SheetTitle>
          <h1>New Blog Sheet</h1>
          <div
            onClick={() => (window.location.href = "/home")}
            style={{ cursor: "pointer" }}
          >
            <h4>Home</h4>
          </div>
        </SheetTitle>

        <>
          {categoriesSelection}

          <Input
            name="title"
            type="text"
            placeholder="Sheet Title"
            value={title}
            onChange={handleTitleInputChange}
          />

          <TextArea
            name="content"
            id="editSheet"
            value={content}
            onChange={handleTextAreaChange}
          />
        </>

        <Button onClick={handleSaveClick}>Save</Button>
      </Container>
    </Wrapper>
  );
};
