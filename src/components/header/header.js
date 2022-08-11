
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const menuWithsession = [
  { title: "Home", to: "/" },
  { title: "Access", to: "/access" },
//   { title: "Profile", to: "/profile" },
  { title: "Out", to: "/out" },
];

const menuWithoutsession = [
  
  // { title: "Signup", to: "/sign-up" },
  // { title: "Login", to: "/login" },
];

export function Header({ session }) {

    return (
        <header>
          <Navbar expand="lg" variant="dark" bg="dark">
            <NavLink to="/" className="mr-10 tc-w"><Navbar.Brand >Dogovor</Navbar.Brand></NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    {!!session &&
                            menuWithsession.map((item) => (
                                    <NavLink key={item.title} className="mr-10 tc-w" to={item.to} >{item.title}</NavLink>
                    ))
                    }
                    {!session &&
                            menuWithoutsession.map((item) => (
                                    <NavLink key={item.title} className="mr-10 tc-w" to={item.to} >{item.title}</NavLink>
                    ))
                    }
                    {/* {!!session && (
                        <Nav.Link 
                        // onClick={() => {
                            
                        // }}
                        >
                        out
                        </Nav.Link>
                    )} */}
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    {/* <Nav.Link  href="#access">Access</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item>Action</NavDropdown.Item>
                      <NavDropdown.Item>Another action</NavDropdown.Item>
                      <NavDropdown.Item>Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </header>
    )
}


