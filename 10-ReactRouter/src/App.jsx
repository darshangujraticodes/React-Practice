import { NavLink, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="container">
          <header>
            <nav className="d-flex justify-content-between">
              <NavLink className={ ({isActive}) => ` ${isActive ? } my-3 linkTag  `  }   to="/" >
                Home
              </NavLink>
              <NavLink to="/about" >
                About
              </NavLink>
              <NavLink to="/service" >
                Service
              </NavLink>
              <NavLink to="contact" >
                Contact
              </NavLink>
            </nav>
          </header>
        </div>

        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
