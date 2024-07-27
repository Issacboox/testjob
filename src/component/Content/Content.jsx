import React from "react";
import TableData from "./Table";

const Content = () => {
  return (
    <div className="p-5">
        <h1 className="text-2xl font-semibold font-prompt">
          รายการขอขึ้นทะเบียน
        </h1>
        {/* table data */}
        <TableData />
    </div>
  );
};

export default Content;
