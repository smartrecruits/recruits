import React, {useState} from "react"
import { useNavigate} from "react-router-dom";
import "./clientReset.css"

export const ClientPasswordreset = () => {
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    let navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('https://recruits.onrender.com/interviewee/reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        })
        .then(response => {
          if (response.ok) {
            navigate("/Client");
          } else {
            response.json().then((err)=>setErrors([err.errors]))
          }
          setLoading(false)
        }) 
    }
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        }
    return(
        <div className="form">
        <div className="auth-form-container">
        <h1>Password Reset</h1>
        <form className="passwordreset-form" onSubmit={handleSumbit}>
            <label className="email" form="email">email</label>
            <input className="input" value={formData.email} onChange={handleChange} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label className="password" form="pasword">password</label>
            <input className="input" value={formData.password} onChange={handleChange}type="password" placeholder="*******" id="password" name="password" />
            { loading ? (<div className="d-flex align-items-center" id="loader">
                                        <strong>Please Wait...</strong>
                        <div className="spinner-border ms-auto" role="status" id="loader" aria-hidden="true"></div>
                        </div> ): (
                        <button className="login" type="submit">Reset Password</button>
                        )
            }
            {errors.length > 0 && (
                <div className="text-danger" id="errors">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
        </form>
        </div>
        </div>
    )
}