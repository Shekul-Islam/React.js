import { NavLink } from "react-router-dom";
import { FaBars, FaBuyNLarge, FaCheckCircle, FaCpanel, FaDashcube, FaHome, FaLock, FaMoneyBill, FaMoneyBillAlt, FaRegCircle, FaTable, FaTablet, FaUser, FaUserAlt, FaUserAltSlash, FaUserAstronaut, FaUserCheck, FaUserCog, FaUserMd, FaUserPlus, FaUsersCog, FaUserSecret } from "react-icons/fa";
import {  BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FaBusinessTime, FaCapsules, FaCartPlus, FaCloudBolt, FaExplosion, FaListCheck, FaListOl, FaMoneyBill1, FaMoneyBillTransfer, FaPeopleArrows, FaPlus, FaRecycle, FaSalesforce, FaSuitcaseMedical, FaUsersBetweenLines } from "react-icons/fa6";



const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/customer",
    name: "Customer",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/settings/add-customer",
        name: "Add Customer",
        icon: <FaUserPlus/>,
      },
      {
        path: "/settings/customer-list",
        name: "Customer List",
        icon: <FaUsersBetweenLines />,
      },
      {
        path: "/settings/customer-ledger",
        name: "Customer Ledger",
        icon: <FaUserCog/>,
      },
    ],
  },
  
  {
    path: "/medicine",
    name: "Medicine",
    icon: <FaCapsules />,
    subRoutes: [
      {
        path: "/settings/add-medicine",
        name: "Add Medicine",
        icon: <FaTable/>,
      },
      {
        path: "/settings/medicine-list",
        name: "Medicine List",
        icon: <FaListOl />,
      },
      {
        path: "/settings/medicine-details",
        name: "Medicine Details",
        icon: <FaListCheck/>,
      },
    ],
  },

  {
    path: "/manufacturer",
    name: "Manufacturer",
    icon: <FaCartPlus />,
    subRoutes: [
      {
        path: "/settings/add-manufacturer",
        name: "Add Manufacturer",
        icon: <FaUserPlus/>,
      },
      {
        path: "/settings/manufacterer-list",
        name: "Manufacturer List",
        icon: <FaUsersBetweenLines />,
      },
      {
        path: "/settings/manufacturer-ledger",
        name: "Manufacturer Ledger",
        icon: <FaUserCog/>,
      },
    ],
  },
  {
    path: "/return",
    name: "Return",
    icon: <FaRecycle />,
    subRoutes: [
      {
        path: "/settings/add-wastage-return",
        name: "Add Wastage Retunr",
        icon: <FaPlus/>,
      },
      {
        path: "/settings/wastage-return-list",
        name: "Wastage Return List",
        icon: <FaListCheck />,
      },
      {
        path: "/settings/add-customer-return",
        name: "Add Customer Return ",
        icon: <FaCheckCircle/>,
      },
      {
        path: "/settings/customer-return-list",
        name: "Customer Return List ",
        icon: <FaUserCog/>,
      },
    ],
  },
  {
    path: "/human-resource",
    name: "Human Resource",
    icon: <FaPeopleArrows />,
    subRoutes: [
      {
        path: "/settings/Employee",
        name: "Employe Profile",
        icon: <FaUserPlus/>,
      },
      {
        path: "/settings/attendence",
        name: "Attendence",
        icon: <FaUsersBetweenLines />,
      },
      {
        path: "/settings/salary",
        name: "Salary ",
        icon: <FaUserCog/>,
      },
    ],
  },
  {
    path: "/finance",
    name: "Finance",
    icon: <FaMoneyBillTransfer />,
    subRoutes: [
      {
        path: "/settings/income",
        name: "Income",
        icon: <FaUserPlus/>,
      },
      {
        path: "/settings/expence",
        name: "Expence",
        icon: <FaUsersBetweenLines />,
      },
      {
        path: "/settings/invoice-list",
        name: "Invoice List ",
        icon: <FaUserCog/>,
      },
    ],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/theme-setting",
        name: "Theme Setting ",
        icon: <FaUser />,
      },
      {
        path: "/settings/log-out",
        name: "Log Out",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "180px",
      padding: "7px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "210px" : "50px",

            transition: {
              duration: 0.4,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 <h3> Pharmacy</h3>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main className="sidebar">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
