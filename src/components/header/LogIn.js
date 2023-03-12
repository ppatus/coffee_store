import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiUser } from "react-icons/bi";
import { useState, useRef, Popover, Overlay, Typography } from 'react';

function LogIn() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
    };

    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    };

    return(
        <div ref={ref}>
            <Nav.Item onClick={openPopover}><BiUser></BiUser> Log in</Nav.Item>
            {/* <Popover open={Boolean(anchor)} anchorEl={anchor}>
                <Typography variant="h6">Hello World</Typography>
            </Popover> */}

            {/* <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Header as="h3">Popover bottom</Popover.Header>
                    <Popover.Body>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Body>
                </Popover>
            </Overlay> */}
        </div>
        
    )
};

export default LogIn;