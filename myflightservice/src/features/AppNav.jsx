import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    return (
        <Nav>
            <NavSection justify-content="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="flights/add">Add Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="flights/view">View Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="flights/manage">Manage Flights</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}