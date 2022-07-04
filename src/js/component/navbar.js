import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  console.log("NEW INGREDIENTS", store.shoppingList);
  let list = store.shoppingList.map((ingredient, index) => (
    <li className="list-group-item p-0" key={index}>{ingredient.ingredientText}</li>
  ));
  
  if (store.shoppingList.length === 0) {
    list = (
      <li className="text-center">
        Add Only what you need! <i className="bi bi-robot"></i>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3 fixed-top">
      <a className="navbar-brand" href="#">
        Don't Waste My Food
      </a>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="true"
            style={{ marginRight: "40px", boxShadow: "none" }}
          >
            Shopping List
            <span className="badge text-bg-secondary">
              {store.shoppingList.length}
            </span>
          </button>
        
          <ul className="list-group-flush dropdown-menu dropdown-menu-right p-4" aria-labelledby="dropdownMenuButton1">
            {list}
  
            <li className="d-flex justify-content-center">
            {store.shoppingList.length !== 0 && <Link className="btn btn-secondary mt-4">Shopping List</Link>}
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};





// <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-3 fixed-top">
//       <a className="navbar-brand" href="#">
//         Don't Waste My Food
//       </a>

//       <div>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-toggle="dropdown"
//                 aria-haspopup="true"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </a>
//               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <a className="dropdown-item" href="#">
//                   Action
//                 </a>
//                 <a className="dropdown-item" href="#">
//                   Another action
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   Something else here
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
