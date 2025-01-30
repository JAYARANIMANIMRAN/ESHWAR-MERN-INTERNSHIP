import React, { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleChange2 = (h) => {
        setAge(h.target.value);
    };

    const mailChange = (mail) => {
        setEmail(mail.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        // Basic validation
        if (!name.trim()) {
            setErrorMessage("Name cannot be empty.");
            return;
        }

        if (!age || isNaN(age) || age <= 0) {
            setErrorMessage("Please enter a valid age.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setSuccessMessage("Authentication successful! Your details are valid.");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type="text" value={name} onChange={handleChange} />
                </label>
                <br />

                <label>
                    Age: <input type="number" value={age} onChange={handleChange2} />
                </label>
                <br />

                <label>
                    Email: <input type="email" value={email} onChange={mailChange} />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

            <p>Your name is: {name}</p>
            <p>Your age is: {age}</p>
            <p>Your email is: {email}</p>
        </div>
    );
}

export default NameInput;
