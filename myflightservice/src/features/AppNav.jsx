import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// This is an opinionated NavBar
export const AppNav = () => {
    return (
        <Nav>
            <NavSection justify-content="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}