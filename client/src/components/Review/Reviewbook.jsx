import React from 'react'
import { useLocation } from 'react-router-dom'
import "../Review/Reviewbook.css"
export default function Reviewbook() {
    const location = useLocation()
    console.log(location.state);
    return (


        <div className='box1' >
            <h1 className='heading'>{location.state.BookName}</h1>
            <div className="book">
                <p>By</p>
                <p style={{ color: "red" }} >&nbsp; Author Name</p>
                <p >&nbsp; Released At</p>
                <p style={{ color: "red" }}>&nbsp;{location.state.category}</p>
                <p >&nbsp;Cateory</p>
                <p style={{ color: "red" }}>&nbsp;{location.state.category}</p>
                {/* <h5>{location.state.category}</h5>
                <h5>Excerpt</h5> */}
            </div>
            <div className='box1' >Every new version of Java is important, but Java 8 is a game changer. Java 8 in Action is a clearly written guide to the new features of Java 8. It begins with a practical introduction to lambdas, using real-world Java code. Next, it covers the new Streams API and shows how you can use it to make collection-based code radically easier to understand and maintain. It also explains other major Java 8 features including default methods, Optional, CompletableFuture and the new Date and Time API.  <div style={{
                marginLeft: "-350px",
                marginTop: "10px",
                display: "flex"
            }}>

                <p >ISBN :</p>
                <p >&nbsp;{location.state.ISBN}</p>
            </div>
                <button className='primary'>Review a Book</button>
            </div>
        </div>


    )
}
