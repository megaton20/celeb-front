import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../config";

function CreateUser() {
    const [user, setUser] = useState({ fname: "", lname: "", email: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_BASE_URL}/users/create/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        }).then(() => navigate("/"));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" required onChange={(e) => setUser({ ...user, fname: e.target.value })} />
            <input type="text" placeholder="Last Name" required onChange={(e) => setUser({ ...user, lname: e.target.value })} />
            <input type="email" placeholder="Email" required onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <button type="submit">Create User</button>
        </form>
    );
}

export default CreateUser;
