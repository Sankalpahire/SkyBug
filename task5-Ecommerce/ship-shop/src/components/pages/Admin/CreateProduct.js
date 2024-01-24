import React from "react";
import Layout from "./../../layout/layout";
import AdminMenu from "./../../layout/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout>
      <div className="container-fluid p-2 mt-5">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default CreateProduct