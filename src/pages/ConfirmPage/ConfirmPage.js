import "./ConfirmPage.css";

import { Button } from "antd";
import { Link } from "react-router-dom";
import React from "react";

const ConfirmPage = () => {
  return (
    <div className={"container"}>
      <div>ConfirmPage</div>

      <Link to={"/home"}>
        <Button type="primary">Home</Button>
      </Link>
    </div>
  );
};

export default ConfirmPage;
