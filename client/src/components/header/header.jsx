import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./header.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavScrollExample() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchval, setSearchval] = useState("")
    const redirect = useNavigate()
    console.log(searchval);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let AuthorToken = localStorage.getItem("AuthorToken")
    const Search = () => {
        redirect("/home", { state: searchval })
    }
    return (

        <Navbar className='head'>
            <Container fluid>
                <Navbar.Brand href="#">BOMNT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {AuthorToken ?
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '90px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => {
                                redirect("/createbook", { state: { title: "", heading: "Register your Book" } })

                            }} >CREATE BOOK</Nav.Link>

                        </Nav> : null
                    }
                </Navbar.Collapse>
                <Form className="search" onChange={(e) => {
                    setSearchval(e.target.value)
                }} value={searchval} >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Button variant="success" onClick={Search}>
                    search
                </Button>
                <div className="avatar">
                    <Avatar style={{ background: "blue" }} onClick={handleClick} />
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    id="basic-menu"
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem>Logout</MenuItem>
                </Menu>

            </Container>
        </Navbar >
    )
}

export default NavScrollExample;