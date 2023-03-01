import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { UserContext } from './Usercontext'


function Login() {
    const localusername = localStorage.getItem("userName")
    const localpassword = localStorage.getItem("password")
    const localemail = localStorage.getItem("email")


    const register = () => {
        navigate("/Registration")
    }

    const logininfo = () => {
        if (formik.values.username === localusername && formik.values.password === localpassword) {
            navigate("/Userinfo")


        }
        else {
            alert("invaild credintial")
            navigate("/Login")

        }
    }



    let navigate = useNavigate();



    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Confirm Password is required"),
        password: Yup.string()
            .required("Confirm Password is required"),

    });





    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,

        onSubmit: (data, { resetForm }) => {
            resetForm({ values: '' });
            logininfo();

            // alert(JSON.stringify(data, null, 2));
        },

    });


    return (
        <>



            <div className='height'>
                <div className="register-form">
                    <div className='text_center'>
                        <h1>Login</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form-group">
                            <label className='labelname'>UserName</label>
                            <input
                                name="username"
                                type="text"
                                placeholder='Username'
                                className={
                                    'form-control' +
                                    (formik.errors.username && formik.touched.username
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.username && formik.touched.username
                                    ? formik.errors.username
                                    : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='labelname'>Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder='Password'
                                className={
                                    'form-control' +
                                    (formik.errors.password && formik.touched.password
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.password && formik.touched.password
                                    ? formik.errors.password
                                    : null}
                            </div>
                        </div>
                        <div className="form-group btngroup">
                            <button type="submit" className="btn btn_primary" >
                                Register
                            </button>
                            <button
                                type="button"
                                className="btn btn_warning float-right"
                                onClick={formik.handleReset}
                            >
                                Reset
                            </button>
                        </div>
                        <div className="form-group btngroup logout">
                            <button type="submit" onClick={register} className="btn btn_primary" >
                                Registration Here
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login