import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export const Post = () => {
  const { id } = useParams();

  return <h1>Poyyyyst{id}</h1>;
};
