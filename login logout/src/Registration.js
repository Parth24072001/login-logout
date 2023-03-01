import React, { useContext } from 'react'
import { UserContext } from './Usercontext'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';



function Login() {

    let navigate = useNavigate();
    const { email, setEmail } = useContext(UserContext);
    const { userName, setUserName } = useContext(UserContext);
    const { password, setPassword } = useContext(UserContext);


    const login = () => {
        navigate("/Login")
    }
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Fullname is required"),
        username: Yup.string()
            .required("Username is required")
            .min(6, "Username must be at least 6 characters")
            .max(20, "Username must not exceed 20 characters"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol'),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
        acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    });


    const settingvalues = () => {
        setEmail(formik.values.email);
        setUserName(formik.values.username);
        setPassword(formik.values.password)
    }


    const formik = useFormik({
        initialValues: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
        },
        validationSchema,

        onSubmit: (data, { resetForm }) => {
            localStorage.setItem("userName", formik.values.username)
            localStorage.setItem("password", formik.values.password)
            localStorage.setItem("email", formik.values.email)

            resetForm({ values: '' });
            // alert(JSON.stringify(data, null, 2));
            navigate("/Userinfo")
            settingvalues();
        },

    });


    return (

        <>
            <div className='height'>
                <div className="register-form">
                    <div className='text_center'>
                        <h1>Registration</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="form">
                        <div className="form-group">
                            <label className='labelname'>Full Name</label>
                            <input
                                name="fullname"
                                type="text"
                                placeholder='Full Name'
                                className={
                                    'form-control' +
                                    (formik.errors.fullname && formik.touched.fullname
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.fullname}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.fullname && formik.touched.fullname
                                    ? formik.errors.fullname
                                    : null}
                            </div>
                        </div>

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
                            <label className='labelname'>Email</label>

                            <input
                                name="email"
                                type="email"
                                placeholder='Email'
                                className={
                                    'form-control' +
                                    (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.email && formik.touched.email
                                    ? formik.errors.email
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

                        <div className="form-group">
                            <label className='labelname'>Confirm Password</label>

                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder='Confirm password'
                                className={
                                    'form-control' +
                                    (formik.errors.confirmPassword && formik.touched.confirmPassword
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                            <div className="invalid-feedback">
                                {formik.errors.confirmPassword && formik.touched.confirmPassword
                                    ? formik.errors.confirmPassword
                                    : null}
                            </div>
                        </div>

                        <div className="form-group form-check">
                            <input
                                name="acceptTerms"
                                type="checkbox"
                                className={
                                    'form-check-input' +
                                    (formik.errors.acceptTerms && formik.touched.acceptTerms
                                        ? ' is-invalid'
                                        : '')
                                }
                                onChange={formik.handleChange}
                                value={formik.values.acceptTerms}
                            />
                            <label htmlFor="acceptTerms" className="form-check-label">
                                I have read and agree to the Terms
                            </label>
                            <div className="invalid-feedback">
                                {formik.errors.acceptTerms && formik.touched.acceptTerms
                                    ? formik.errors.acceptTerms
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
                            <button type="submit" onClick={login} className="btn btn_primary" >
                                Login
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </>);
}
export default Login