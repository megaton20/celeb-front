import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="compact-container">
      <section class="dashboard-profile mb-4">
        <div class="profile-banner">
          <div class="edit-banner">
            <i class="bi bi-pencil"></i>
          </div>

          <div class="avatar">
            <img src="/images/avatar.png" alt="User Avatar" />
            <div class="edit-avatar">
              <i class="bi bi-pencil"></i>
            </div>
          </div>
        </div>

        <div class="user-info">
          <h1>Adariku Michael </h1>
          <p>
            <i class="fas fa-envelope"></i>adarikmichael@gmail.com
          </p>
          <p>
            <i class="fas fa-envelope"></i> State: Akwa Ibom
          </p>
        </div>

        <div class="stats-buttons-wrapper">
          <div class="stats-row">
            <div class="stat">
              <h4>0</h4>
              <p>Followers</p>
            </div>
            <div class="stat">
              <h4>0</h4>
              <p>following</p>
            </div>
            <div class="stat">
              <h4>0</h4>
              <p>Contest won</p>
            </div>

          </div>

          <div class="button-row">
            <Link to="#" class=" btn btn-success">
              <i class="fas fa-comment-dots"></i> Message
            </Link>

            <Link to="#" class=" secondary">
              <i class="fas fa-user-plus"></i> Follow
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Users;
