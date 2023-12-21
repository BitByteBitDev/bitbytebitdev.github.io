import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const MainNavbar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar
                collapseOnSelect
                bg='light'
                variant='light'
                id='navbar'
                expand='lg'
                expanded={expanded}
                sticky='top'
            >
                <Container>
                    <Link href='/' passHref={true}>
                        <Navbar.Brand className='d-flex flex-row'>
                            <Image
                                src='/android-chrome-512x512.png'
                                width='36'
                                height='30'
                                alt='bit byte bit logo'
                                className='rounded-circle'
                            />
                            <div className='ms-3'>Bit Byte Bit</div>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle
                        aria-controls='responsive-navbar-nav'
                        onClick={() => setExpanded(expanded ? false : true)}
                    />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto d-flex align-items-center'>
                            <Nav.Link className='me-4' href='/courses'>
                                Courses
                            </Nav.Link>
                            <Nav.Link className='me-4' target='_blank' href='https://www.youtube.com/@bitbytebitdev'>
                                YouTube
                            </Nav.Link>
                            <Nav.Link className='me-4' target='_blank' href='https://bitbytebitdev.beehiiv.com/subscribe'>
                                Newsletter
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MainNavbar;
