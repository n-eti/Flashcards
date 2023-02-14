import React, { useEffect, useState } from "react";
import axios from "axios";

const Collection = (props) => {
  return <div>{props.collection.title}</div>
};

export default Collection;
