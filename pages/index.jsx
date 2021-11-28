import React from "react";

const Index = () => <></>;

Index.getInitialProps = async (ctx) => {
  const { res } = ctx;
  if (res) res.writeHead(303, { Location: "/home" }).end();
  else window.location.href = "/home";
};

export default Index;
