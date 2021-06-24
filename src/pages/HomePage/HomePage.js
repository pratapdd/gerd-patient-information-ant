import "./HomePage.css";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <div className={"container"}>
      <div>
        <div>
          <img src="./gerd.png" alt="Gerd" />
        </div>
        <div>
          <img src="integrace.png" alt="integrace" />
        </div>
        <div className={"action"}>
          <Link to={"/add"}>
            <Button type="primary" size="large">
              Enter
              <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
