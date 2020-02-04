import React, { useEffect } from "react";

export default function (ComposedComponent) {
  function Authentication(props) {
    useEffect(() => {
      if (!localStorage.getItem("jwt-token")) {
        props.history.push('/Admin');
      }
    }, []);

    return (
      <ComposedComponent  {...props} />
    )
  }
  return Authentication;
}