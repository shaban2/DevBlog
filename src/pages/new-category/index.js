import React, { useEffect, useState } from "react";
import {
  Button,
  HeaderDiv,
  Input,
  Wrapper,
  IconContainer,
  IconsWrap,
  IconDiv,
} from "./style";
import { ReactSVG } from "react-svg";
import AllIcons from "../../data/category-icons.json";
import Icon_default from "../../assets/icons/default.svg";
import axios from "axios";
import slug from "slug";

export const NewCategory = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("default");
  const [allIcons, setAllIcons] = useState();
  const [showErrMsg, setShowErrMsg] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/current_user`)
      .then((res) => {
        let data = res.data;

        data.map((res) => {
          return setId(res._id);
        });
        console.log(id);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleDivClick = (e) => {
    if (e.target.id) {
      console.log(e.target.id);
      setIcon(e.target.id);
    }
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const saveCategory = () => {
    if (title === "") {
      setShowErrMsg(true);
    } else {
      let userId = id;
      let titleSlug = slug(title);
      const data = { title, icon, userId, titleSlug };

      axios
        .post("http://localhost:5000/api/add_category", data)
        .then((res) => {
          window.location = "/home";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const errMsg = (
    <div className="flex">
      <div>
        <span className="red">Please give your category a title.</span>
      </div>
    </div>
  );

  useEffect(() => {
    let myIcons = [
      <IconContainer onClick={handleDivClick} id="default" key="default">
        <ReactSVG src={Icon_default} />
        <div className="iconName">default</div>
      </IconContainer>,
    ];

    let icons = AllIcons.icons;
    icons.forEach((icon) => {
      let svg = require(`../../assets/icons/${icon.fileName}`);
      let IconPath = svg;

      let div = (
        <IconContainer onClick={handleDivClick} id={icon.name} key={icon.name}>
          <ReactSVG src={IconPath} />
          <div className="iconName">{icon.name}</div>
        </IconContainer>
      );

      myIcons.push(div);
    });

    setAllIcons(myIcons);
  }, []);

  return (
    <Wrapper>
      <div>
        <HeaderDiv>
          <h1>New Category</h1>
          <div
            onClick={() => (window.location.href = "/home")}
            style={{ cursor: "pointer" }}
          >
            <h4>Home</h4>
          </div>
        </HeaderDiv>

        <Input
          type="text"
          placeholder="Category Title"
          value={title}
          onChange={handleTitleInput}
        />
        <IconDiv>
          <IconsWrap id="iconContainer">{allIcons}</IconsWrap>
        </IconDiv>
        {showErrMsg ? errMsg : ""}
        <Button onClick={saveCategory}>Save</Button>
      </div>
    </Wrapper>
  );
};
