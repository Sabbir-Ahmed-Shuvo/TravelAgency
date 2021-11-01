import React from 'react';
import { useForm } from 'react-hook-form';
import'./AddService.css'


const AddService = () => {
    const { register, handleSubmit,user,errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <form className="form-1" onSubmit={handleSubmit(onSubmit)}>

                    <input  placeholder="Name" className="form-control"  defaultValue={user?.displayName} {...register("name")} />

                    <input  placeholder="Email"   className="form-control my-4" defaultValue={user?.email} {...register("email", { required: true })} />
                    {errors?.email && <span className="error">This field is required</span>}
                    <input placeholder="Address"  className="form-control" defaultValue="" {...register("address")} />
                    <input placeholder="City"  className="form-control my-4" defaultValue="" {...register("city")} />
                    <input placeholder="phone number"  className="form-control" defaultValue="" {...register("phone")} />

                    <input type="submit"  className="w-100 mt-4 btn-primary" />
                </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default AddService;