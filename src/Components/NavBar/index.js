import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css';

function NavBar() {
    return(
    <div>
        <div id='nav-bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Jesse Powers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        {/* <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div id='jumbo'>
            <Jumbotron fluid>
                <Container>
                    <h3>Hi, I'm Jesse!</h3>
                    <p></p>
                    <h5>Let me tell you a little bit about myself.</h5>
                    <p></p>
                    <p>I'm an Analytics Leadership Development Program Associate at a financial services company in Minneapolis. <b>But that's not all I am!</b></p>
                    <p>In addition to being a huge analytics nerd, I'm also passionate about:</p>
                    <li><a href="http://coursecorrectly.com"><b>Democratizing Education</b></a></li>
                    <li><a href="https://instagram.com/jesse_l_powers"><b>Creating objects out of clay</b></a></li>
                    <li>Environmental Sustainability</li>
                    <p></p>
                    <p>And much more!</p>
                    <p></p>
                    <p>I'm a very curious person who has tried a lot of things, let me share some with you!</p>
                    <p><b>Before my current position,</b> I spent time as a Fine Art major, Disney College Program Intern, Ceramics Studio Intern, Wildland Firefighter, Apartment Leasing Consultant, and Sales Operations Analyst at a Solar Photovoltaic EPC (engineering-procuring-construction) company.</p>
                    <p>I've been fortunate to experience life in <b>five different states,</b> including: Pennsylvania, Florida (Orlando), Colorado (Aurora and St. George), Missouri (Kansas City), and now Minnesota (Minneapolis).</p>
                    <p><b>In 2019, I found a love for coding.</b> While working as a Leasing Consultant, I enrolled in a part-time, full-stack web develpoment bootcamp and was instantly <b>hooked.</b></p>
                    <p>When the program ended, I was desperate to keep learning and enrolled at Park University where I graduated <b>Summa Cum Laude</b> with a <b> BS in Information Systems</b> in 2021.</p>
                    <p><b>Outside the office</b> you can find me building <a href='https://coursecorrectly.com'><b>Course Correctly</b></a> with my good pal, Eric, <a href='https://instagram.com/jesse_l_powers'><b>making pots in the studio,</b></a> and <a href="https://coursecorrectly.com/mooc-inspired-masters-in-data-science-analytics-degree-comparison/"><b>furthering my quest to become a Data Science master.</b></a></p>
                    <p>I'm a pretty busy guy, but always <a href="mailto:jesseleepowers@gmail.com"><b>happy to talk.</b></a></p>
                    <p><b>Or connect with me here:</b></p>
                    <p><a href="https://www.linkedin.com/in/jesse-powers-105502146/"><b>LinkedIn</b></a> | <a href="https://instagram.com/jesse_l_powers"><b>Instagram</b></a> | <a href="https://twitter.com/jesse_l_powers"><b>Twitter</b></a></p>
                </Container>
            </Jumbotron>
        </div>
    </div>
    )
}

export default NavBar;