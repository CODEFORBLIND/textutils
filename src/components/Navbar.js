import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default function Navbar(props) {
    return ( 
        <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`} data-bs-theme="dark">
        <div className="container-fluid">
            <a className={`navbar-brand ${props.mode === 'light' ? 'dark' : 'light'}`} href="#" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {props.title}
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Left-aligned nav items */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">  {/* Add me-auto here */}
                    <li className="nav-item">
                        <Link className={`nav-link active ${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.mode === 'light' ? 'dark' : 'light'}`} to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.aboutText}</Link>
                    </li>
                </ul>
                
                {/* Right-aligned color palette */}
                <div className="d-flex ms-auto">  {/* Add ms-auto here */}
                    <div className="bg-light rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
                    <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
                    <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
                    <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
                    <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid black' }}></div>
                </div>
            </div>
        </div>
    </nav>



    )
}

// Used to define the types of props to avoid uncaught errors
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

Navbar.defaultProps = {title: "Write title here",
                        aboutText: "Write about text here"}




                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={()=>{props.toggleMode('null')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                </div> */}





        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //     <a className="navbar-brand" href="/">{props.title}</a>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //         <li className="nav-item">
        //             <a className="nav-link active" aria-current="page" href="/">Home</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="/">{props.aboutText}</a>
        //         </li>
        //         </ul>
        //         <form className="d-flex" role="search">
        //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        //         <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //     </div>
        //     </div>
        // </nav>