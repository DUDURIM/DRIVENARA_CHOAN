import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';
import InfoModal from '../modals/InfoModal';
import HeaderLogo from '../images/logo.png';

const Header = () => {
    const [SignUpModalOn, setSignUpModalOn] = useState(false);
    const [SignInModalOn, setSignInModalOn] = useState(false);
    const [InfoModalOn, setInfoModalOn] = useState(false);
    return (
        <>
            <SignUpModal show={SignUpModalOn} onHide={() => setSignUpModalOn(false)} />
            <SignInModal show={SignInModalOn} onHide={() => setSignInModalOn(false)} />
            <InfoModal show={InfoModalOn} onHide={() => setInfoModalOn(false)} />
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand ><img src={HeaderLogo} className='HeaderLogo' alt='HeaderLogo' />Drive Nara</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link style={{marginLeft:'20px'}} href="#home">홈</Nav.Link>
                                <Nav.Link style={{marginLeft:'20px'}} href="#mypage">마이페이지</Nav.Link>
                                <Nav.Link style={{marginLeft:'20px'}} href="#zle">즐겨찾기</Nav.Link>
                            </Nav>

                            <Nav.Link><Nav style={{}} className="mx-auto">
                            <Nav.Link><Button variant="warning" onClick={() => setInfoModalOn(true)}>사업소개</Button></Nav.Link>
                            <Nav.Link><Button variant="primary" onClick={() => setSignInModalOn(true)}>로그인</Button></Nav.Link>
                            <Nav.Link><Button variant="secondary" onClick={() => setSignUpModalOn(true)}>회원가입</Button></Nav.Link>
                            </Nav>
                            </Nav.Link>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header >
        </>
    )
}

export default Header;