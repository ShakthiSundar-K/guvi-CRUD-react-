import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard({ data, getData }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://66a5ee0523b29e17a1a14b1b.mockapi.io/UserManagement/${id}`
      );
      getData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className='dashboard-container'>
      <h2 className='mb-5'>User Data</h2>
      <Table striped bordered hover responsive>
        <thead className='text-center'>
          <tr>
            <th>SI.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className='text-center'>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company}</td>
                <td className='text-center'>
                  <Button
                    variant='primary'
                    className='me-2'
                    onClick={() => navigate(`/edit-user/${item.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant='danger'
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='8' className='text-center'>
                Loading Data...
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
