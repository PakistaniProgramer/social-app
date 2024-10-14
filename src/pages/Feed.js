import React from "react";
import Post from "./Post";
import styled from "@emotion/styled";

import { Box } from "@mui/material";

const PostSetting = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

function Feed() {
  return (
    <React.Fragment>
      <PostSetting>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostSetting>
    </React.Fragment>
  );
}

export default Feed;
