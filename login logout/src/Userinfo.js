import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './Usercontext'
import { useNavigate } from 'react-router';
import axios from 'axios';


function Userinfo() {

    // const url="https://newsapi.org/v2/everything?q=Apple&from=2023-02-22&sortBy=popularity&apiKey=8c5a23eb4dbf456ab68fe9c107c108d0";
    const url = " https://saurav.tech/NewsAPI/everything/cnn.json";


    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            const response = res.data.articles
            setPost(response);
            console.log(response)
        })
    }, [])


    let navigate = useNavigate();

    const localusername = localStorage.getItem("userName")
    const localemail = localStorage.getItem("email")

    const logout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/Login")
    }
    return (
        <>
            <div className='text_center'>
                <div className='details '>
                    <p>Your Username is:{localusername}</p>
                    <p>Your Email is:{localemail}</p>
                </div>
                <div className="form-group btngroup logout">
                    <button type="submit" onClick={logout} className="btn btn_primary" >
                        Logout
                    </button>
                </div>
            </div>

            <div className="parent">
                {localusername === null ? ("Please Register") : post.map((itr) => {
                    return (
                        <div className="card" key={itr.publishedAt} style={{ width: '18rem' }
                        }>
                            <img src={itr.urlToImage} className="card-img-top image" alt="images" />
                            <div className="card-body">
                                <p> {itr.publishedAt}</p>
                                <h4 className="card-title">{itr.source.name}</h4>
                                <h5 className="card-title">{`Author Name: ${itr.author} `}</h5>
                                <p className="card-text">{itr.content.length <= 100 ? itr.content.slice(0, 100) : itr.content}</p>
                                <a href={itr.url} className="btn btn_primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Userinfo