import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [remove, setRemove] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allregister")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [remove]);

  const handleCancel = (id) => {
    const procced = window.confirm(
      "Are you sure you want to cancel the booking?"
    );
    if (procced) {
      fetch(`http://localhost:5000/remove/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking successfully cancelled");
            setRemove(!remove);
          }
        });
    }
  };
  return (
    <div className="container my-5">
      <h2 className="my-4">Manage All Vacation Bookings</h2>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((allBooking, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{allBooking?.username}</td>
              <td>{allBooking?.email}</td>
              <td>
                {allBooking?.name} (status: {allBooking?.status})
              </td>
              <td>
                <button className="btn btn-primary mx-2">Approve</button>
                <button
                  onClick={() => {
                    handleCancel(allBooking?._id);
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrder;
