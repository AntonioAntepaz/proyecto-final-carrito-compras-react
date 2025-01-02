import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import '../styles/NavBarComponent.css' 

export const NavBarComponent = () => {

  const { shoppingList } = useContext (CartContext )

  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<NavLink to='/' className="navbar-brand">HiperCompras</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <div className="navbar-nav"> 
    <NavLink to='/carrito' className="nav-link" aria-current="page">Productos</NavLink>
        </div>

        
    <div className="navbar-nav"> 
    <NavLink to='/carrito' className="nav-link" aria-current="page">Carrito</NavLink>
        </div>

    </div>
    <NavLink className='cart-icon' to='/carrito'>
          <Badge badgeContent={shoppingList.length} color="primary">
          <ShoppingCart/>
          </Badge>
    </NavLink>
  </div>

</nav>
  )
}

