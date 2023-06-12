import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const AddStudent = () => {
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [prody, setPrody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            fullname: name,
            profilePicture,
            address,
            phoneNumber,
            birthDate,
            gender,
            faculty: "Fakultas Ekonomi",
            programStudy: prody,
        };

        fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
            .then(() => {
                navigate('/student');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Navbar />
            <div>
                <h1>Add Student</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            data-testid="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="profilePicture">Profile Picture:</label>
                        <input
                            type="text"
                            id="profilePicture"
                            value={profilePicture}
                            onChange={(event) => setProfilePicture(event.target.value)}
                            data-testid="profilePicture"
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            data-testid="address"
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            data-testid="phoneNumber"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthDate">Birth Date:</label>
                        <input
                            type="text"
                            id="birthDate"
                            value={birthDate}
                            onChange={(event) => setBirthDate(event.target.value)}
                            data-testid="date"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                            data-testid="gender"
                        />
                    </div>
                    <div>
                        <label htmlFor="prody">Program Study:</label>
                        <input
                            type="text"
                            id="prody"
                            value={prody}
                            onChange={(event) => setPrody(event.target.value)}
                            data-testid="prody"
                        />
                    </div>
                    <button type="submit" data-testid="add-btn">Submit</button>
                </form>
            </div>
        </>
    );
};

export default AddStudent;
