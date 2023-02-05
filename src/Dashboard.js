// React component file
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Dashboard = () => {
    // State to store the user details
    const [userDetails, setUserDetails] = useState([]);

    // State to store the current user being edited
    const [currentUser, setCurrentUser] = useState({
        id: '7d569df9-cdaf-43aa-8b22-9cd35c184771',
        fname: '',
        lname: '',
        age: '',
        phone: '',
        email: ''
    });

    // Function to handle the form inputs
    const handleInput = e => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    };

    // Function to add a new user
    const addUser = e => {
        e.preventDefault();
        if (currentUser.fname !== '' && currentUser.lname !== '' && currentUser.age !== '' && currentUser.phone !== '' && currentUser.email !== '') {
            setUserDetails([...userDetails, currentUser]);
            setCurrentUser({ id: '7d569df9-cdaf-43aa-8b22-9cd35c184771', fname: '', lname: '', age: '', phone: '', email: '' });
        }
    };

    // Function to edit a user
    const editUser = user => {
        setCurrentUser({ ...user });
    };

    // Function to delete a user
    const deleteUser = id => {
        setUserDetails(userDetails.filter(user => user.id !== id));
    };

    // Use Effect hook to fetch the user list from the API
    //   useEffect(() => {
    //     axios
    //       .get('https://blue-journalist-bbrpv.ineuron.app:4000/users')
    //       .then(res => {
    //         setUserDetails(res.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }, []);

    return (
        <div className="dashboard-container">
            <h2 className="title">User Dashboard</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th className="table-header">First Name</th>
                        <th className="table-header">Last Name</th>
                        <th className="table-header">Age</th>
                        <th className="table-header">Phone Number</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetails.map(user => (
                        <tr key={user.id} className="user-row">
                            <td className="table-data">{user.fname}</td>
                            <td className="table-data">{user.lname}</td>
                            <td className="table-data">{user.age}</td>
                            <td className="table-data">{user.phone}</td>
                            <td className="table-data">{user.email}</td>

                            <td className="table-data actions">
                                <button
                                    onClick={() => editUser(user)}
                                    className="edit-btn"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 className="add-user-title">Add User</h3>
            <form className="add-user-form" onSubmit={addUser}>
                <div className="form-group">
                    <input
                        type="text"
                        name="fname"
                        placeholder="Name"
                        value={currentUser.fname}
                        onChange={handleInput}
                        className="form-input"
                    />
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        value={currentUser.lname}
                        onChange={handleInput}
                        className="form-input"
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={currentUser.age}
                        onChange={handleInput}
                        className="form-input"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={currentUser.phone}
                        onChange={handleInput}
                        className="form-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={currentUser.email}
                        onChange={handleInput}
                        className="form-input"
                    />
                </div>
                <button className="add-user-btn">Add</button>
            </form>
        </div>
    );
};

export default Dashboard;

