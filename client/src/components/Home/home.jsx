import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Model from "../Model/Model"
import "./home.css"
import { toast, ToastContainer } from 'react-toastify';
// import Createbook from '../Createbook/createbook'

export default function Home() {
    const [data, setData] = useState([])
    const redirect = useNavigate()
    const location = useLocation()
    const [modalShow, setModalShow] = React.useState(false);
    const [catagory, setCatagory] = React.useState("")
    const AuthorToken = localStorage.getItem("AuthorToken")
    //get all books data
    const GetData = async () => {
        await axios.get("http://localhost:3001/books")
            .then((res) => {

                if (res.status === 200) {
                    setData(res.data)
                }
            })
    }

    useEffect(() => {
        GetData()
    }, [])
    return (
        <div className='page'>

            <div className="home-box">
                <div className='filter-box'>
                    <div className="row1">
                        <button className='flbox-button1'
                            value={"Fiction & Literature"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Fiction & Literature</button>
                        <button className='flbox-button1'
                            value={"Biography"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Biography</button>
                        <button className='flbox-button1'
                            value={"Business & Career"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Business & Career</button>
                        <button className='flbox-button1'
                            value={"Technology"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Technology</button>
                        <button className='flbox-button1'
                            value={"Personal Growth"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Personal Growth</button>
                        <button className='flbox-button1'
                            value={"Children & Youth"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Children & Youth</button>
                    </div>
                    <div className="row2">
                        <button className='flbox-button1'
                            value={"Environment"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Environment</button>
                        <button className='flbox-button1'
                            value={"Academic & Education<"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Academic & Education</button>
                        <button className='flbox-button1'
                            value={"Science & Research"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Science & Research</button>
                    </div>

                </div>

                <div className="row mt-4" >
                    {
                        data.filter((el) => {
                            return (catagory !== "" || location.state !== null ? el.category === catagory
                                || el.title === location.state : el)
                        }).map((curElem) => {
                            const { title, _id, link } = curElem;

                            return (
                                <div className="col-md-3" key={_id}  >
                                    <div className="box"  >

                                        <div className="home-image">
                                            <div className="image" onClick={() => {
                                                redirect("/reviewbook", {
                                                    state: {
                                                        curElem,
                                                        data
                                                    }
                                                })
                                            }} >
                                                <img src={link} alt=""
                                                    style={{
                                                        height: "270px", width: "200px",
                                                        boxShadow: "0 0 20px -10px #f6f6f6",

                                                    }} />
                                            </div>
                                        </div>
                                        <h5>{title}</h5>
                                        <div className='home-button'>
                                            <div className="container d-flex justify-content-between my-3">

                                                {AuthorToken ?
                                                    <>
                                                        <button type="button" className="btn btn-dark mx-1" onClick={() => {
                                                            redirect("/createbook", { state: { heading: "Update Book", _id } })
                                                        }}  >
                                                            Update</button>

                                                        <Button variant="btn btn-dark mx-1"
                                                            onClick={() => setModalShow(!modalShow)}>
                                                            Delete
                                                        </Button>
                                                    </> : null
                                                }

                                                {modalShow && <Model
                                                    show={modalShow}
                                                    onHide={async () => {

                                                        setModalShow(false)
                                                    }}
                                                    Flose={async () => {

                                                        await axios.put(`http://localhost:3001/deletebook/${_id}`)
                                                            .then((res) => {
                                                                if (res.status === 200) {
                                                                    toast.success("Data deleted Successfully !")
                                                                }

                                                            })
                                                        setModalShow(false)
                                                    }}

                                                />}

                                            </div>
                                        </div>
                                    </div>

                                </div>)
                        })}

                </div>
            </div>
            <ToastContainer position='top-right' />
        </div>
    )
}

