import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          <h1 className="text-3xl pt-8 font-bold text-accent">
            Welcome To Dashboard
          </h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-neutral text-white">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink activeClassName="bg-primary" to="/dashboard">
                My Profile
              </NavLink>
            </li>
    
            {admin ? (
              <>
                <li>
                <NavLink activeClassName="bg-primary" to="/dashboard/users">
                  All User
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="bg-primary" to="/dashboard/manageAllOrder">
                  All Order
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="bg-primary" to="/dashboard/addProduct">
                  Add Product
                </NavLink>
                </li>
                <li>
                <NavLink activeClassName="bg-primary" to="/dashboard/manageProduct">
                  Manage Product
                </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink activeClassName="bg-primary" to="/dashboard/myOrder">
                    My Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="bg-primary"
                    to="/dashboard/addReview"
                  >
                    Add Review
                  </NavLink>
                </li>
              </>
            )}

            {/* {admin && (
              <li>
                <NavLink activeClassName="bg-primary" to="/dashboard/users">
                  All User
                </NavLink>
              </li>
            )} */}

            {/* {
              admin && <>
                <li>
              <Link to="/dashboard/users">All User</Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor">Add a Doctor</Link>
            </li>
            <li>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
              </>
            } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
