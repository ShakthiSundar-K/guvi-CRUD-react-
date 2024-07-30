import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function EditUser({ getData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");
  const { id } = useParams();
  const cleanId = parseInt(id.replace(":", ""), 10);

  const navigate = useNavigate();

  const fetchuserdata = async (e) => {
    try {
      const res = await axios.get(
        `https://66a5ee0523b29e17a1a14b1b.mockapi.io/UserManagement/${cleanId}`
      );
      if (res.status === 200) {
        const user = res.data;
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setCity(user.city);
        setWebsite(user.website);
        setCompany(user.company);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchuserdata();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://66a5ee0523b29e17a1a14b1b.mockapi.io/UserManagement/${cleanId}`,
        {
          name: name,
          email: email,
          phone: phone,
          city: city,
          website: website,
          company: company,
        }
      );
      if (res.status === 200) {
        getData(); // Ensure this function updates the data after the new user is created
        navigate("/dashboard"); // Redirect to the dashboard after successful creation
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className='mt-2'>Update User</h2>
      <div className='container-form'>
        <div className='form-container'>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                Name:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='text'
                  placeholder='Please Enter Name'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                Email:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='email'
                  placeholder='Please Enter Email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                Phone:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='number'
                  placeholder='Please Enter Phone Number'
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                City:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='text'
                  placeholder='Please Enter City'
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                Website:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='text'
                  placeholder='Please Enter Website URL'
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3 align-items-center'>
              <Form.Label column sm={2} className='lg-text-end sm-text-start'>
                Company:
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type='text'
                  placeholder='Please Enter Company'
                  onChange={(e) => setCompany(e.target.value)}
                  value={company}
                />
              </Col>
            </Form.Group>

            <div className='button-container'>
              <Button
                variant='primary'
                type='submit'
                style={{ marginRight: "3.2rem" }}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
