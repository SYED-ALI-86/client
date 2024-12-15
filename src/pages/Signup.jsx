import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);  // Loading state for the button
  const submitformhandler = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);  // Start loading
    try {
      await axios.post("http://localhost:8000/api/create", {
        name,
        email,
        password,
        confirmpassword,
      });
      toast.success("user create successfully")
      navigate('/login')
      // if (response.data.success) {
      //   toast.success("User created successfully");
      // } else {
      //   toast.error("Failed to create user");
      // }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Error occurred while creating user");
    } finally {
      setLoading(false);  // Stop loading once request is complete
    }
  };

  return (
    <main className="form-signin w-25 m-auto text-center mt-5 border p-4 rounded bg-dark">
      <form onSubmit={submitformhandler}>
        <img
          className="mb-4 text-center"
          src="/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Bootstrap logo"
          width={72}
          height={57}
        />
        <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>
        
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput" >Name</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput" >Email address</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <label htmlFor="floatingPassword" >Confirm Password</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2 text-white"
          type="submit"
          disabled={loading}  // Disable button while loading
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>

        <p className="mt-5 mb-3 text-body-secondary text-white">© 2017–2024</p>
      </form>
    </main>
  );
};

export default Signup;
