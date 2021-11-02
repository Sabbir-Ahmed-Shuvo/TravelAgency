import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`https://still-beach-60108.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "Pending";
    fetch("https://still-beach-60108.herokuapp.com/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Register Booking Successfully!");
          reset();
        }
      });
  };

  return (
    <div className="container">
      <h2 className="my-5 text-primary text-uppercase">
        You can book a vacation from here
      </h2>
      <div className="row g-5">
        <div className="col-md-6">
          <h3 className="text-uppercase my-4 text-info">
            Please Fill up registration form
          </h3>
          <form className="form-1" onSubmit={handleSubmit(onSubmit)}>
            {user?.displayName && (
              <input
                className="form-control"
                defaultValue={user?.displayName}
                {...register("username")}
              />
            )}

            {user?.email && (
              <input
                className="form-control my-4"
                defaultValue={user?.email}
                {...register("email", { required: true })}
              />
            )}
            <input
              placeholder="Address"
              className="form-control"
              {...register("address", { required: true })}
            />
            <input
              placeholder="Phone number"
              className="form-control mt-4"
              {...register("phone", { required: true })}
            />

            <input
              type="date"
              className="form-control my-4"
              {...register("date", { required: true })}
            />

            {service?.name && (
              <input
                defaultValue={service?.name}
                className="form-control my-4"
                {...register("name", { required: true })}
              />
            )}

            <input type="submit" className="w-100 mt-4 btn-primary" />
          </form>
        </div>
        <div className="col-md-6">
          <div className="servicsCard">
            <div className="card-bg">
              <img src={service?.img} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title card-text">{service?.name}</h5>
                <p className="card-text card-text">{service?.description}</p>
                <h4 className="text-primary">${service?.price}</h4>
                <Link to="/services">
                  <button className="btn btn-warning">Go Services</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
