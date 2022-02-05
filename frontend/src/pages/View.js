import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import UserService from "../services/user.service";

const View = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    UserService.getFiles()
      .then((res) => {
        console.log(res.data.data);
        setFiles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 m-10">
        {files.map((file) => {
          return <Card file={file} />;
        })}
      </div>
    </>
  );
};

export default View;
