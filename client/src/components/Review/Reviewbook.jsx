import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

import { useLocation } from 'react-router-dom'
import "../Review/Reviewbook.css"
import { toast, ToastContainer } from 'react-toastify';

export default function Reviewbook() {
    const location = useLocation()
    const [val, setVal] = useState({
        review: ""
    })
    const [reviewdata, Setreviewdata] = useState([])
    const change = (e) => {
        let { name, value } = e.target
        setVal({ ...val, [name]: value })
    }
    const submitReview = () => {
        val.authorname = location.state.curElem.authorname
        val.bookId = location.state.curElem._id
        console.log(val);
        axios.post("http://localhost:3001/createreview", val)
            .then((res) => {
                if (res.status === 200)
                    toast.success("Review added successfully!")
            })
    }
    const Getreviewdata = () => {
        console.log(location.state.curElem._id);
        axios.get(`http://localhost:3001/getreview/${location.state.curElem._id}`)
            .then((res) => {
                // console.log(res.data);
                if (res.status === 201)
                    Setreviewdata(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        Getreviewdata()
    }, [])
    return (
        <>
            <div style={{ display: "flex", marginLeft :"20px"}} >
                <div className="leftbox">
                    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
                </div>
                <div className='mid-box' >
                    <h1 style={{ fontFamily: "initial", marginTop: "-30px" }} >{location.state.curElem.title}</h1>
                    <div className="book">
                        <div className="fitem">By</div>
                        <div className="fitem" style={{ color: "blue" }}>{location.state.curElem.authorname}</div>
                        <div className="fitem"> Released At</div>
                        <div className="fitem" style={{ color: "blue" }}> {location.state.curElem.releasedAt}</div>
                        <div className="fitem"> Cateory</div>
                        <div className="fitem" style={{ color: "blue" }}> {location.state.curElem.category}</div>
                    </div>
                    <div className="book1">
                        <div className="bitem">{location.state.curElem.excerpt}</div>
                    </div>
                    <div className="book2">
                        <div className="bitem">{location.state.curElem.reviews}</div>
                        <div className="bitem">ratings</div>
                    </div>
                </div>
                <div className="right-box">
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                </div>
            </div>
                <h3 style={{ textAlign: "center" }}>How would you rate your experience for books ?</h3>
                <div style={{ marginLeft: "30px" }}>
                    <h5 style={{ color: "black" }}>Submit Book Review</h5>
                    <input className='btn1' type="text" name='review' onChange={change} value={val.review} />
                    <button className='btn2' onClick={submitReview}
                    >
                        Write a Book review
                    </button>

                </div>
                <div className="reviewbox">
                    {
                        reviewdata.map((data) => {
                            // console.log(data);
                            return <div className="reviewitem" key={data._id}>
                                <h5 style={{ color: "black" }}>{data.reviewedBy}</h5>
                                <p style={{ color: "black" }}>{data.review}</p>

                            </div>
                        })
                    }
               
            </div>
            <ToastContainer position='top-right' />
        </>

    )
}
