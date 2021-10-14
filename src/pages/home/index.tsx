import React, { Component, useEffect, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";

interface Home {
  name: string;
}
const Home: React.FC<Home> = (props) => {
  const { name } = props;

  return name;
};

export default Home;
