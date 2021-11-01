import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, user, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className="form-1" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              className="form-control"
              {...register("name")}
            />

            <input
              placeholder="Description"
              className="form-control my-4"
              {...register("description", { required: true })}
            />

            <input
              type="number"
              placeholder="Price"
              className="form-control"
              {...register("price")}
            />
            <input
              placeholder="Image Url"
              className="form-control my-4"
              {...register("img")}
            />

            <input type="submit" className="w-100 mt-4 btn-primary" />
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default AddService;
