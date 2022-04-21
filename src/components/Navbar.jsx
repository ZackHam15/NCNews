import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";

const NavBar = () => {
const [topics, setTopics] = useState([])

useEffect(() => {
getTopics().then((apiTopics) => {
setTopics(apiTopics)
})
}, []);
return (
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand>Northcoders News</Navbar.Brand>
<Nav className="navlink">
<ul>
<Link to="/articles">
<li className="navList">Articles List</li>
</Link>
</ul>
<NavDropdown title="Topics" id="navDropdown">
{topics.map((topic) => {
return (
<NavDropdown.Item 
key={topic.slug}
as={Link}
to={`/articles/${topic.slug}`}
> {" "}
<li className="navList" key={topic.slug}>
{topic.slug}
</li>
)
</NavDropdown.Item>
)
})}
</NavDropdown>
</Nav>
</Container>
</Navbar>
);
};

export default NavBar;