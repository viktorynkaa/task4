import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/info" className="nav-link">Info</Link>
            <Link to="/cve-twenty-days" className="nav-link">CVE 20 days</Link>
            <Link to="/new-cve" className="nav-link">New CVE</Link>
            <Link to="/known-cve" className="nav-link">Known CVE</Link>
            <Link to="/query-cve" className="nav-link">Query CVE</Link>
        </nav>
    );
}