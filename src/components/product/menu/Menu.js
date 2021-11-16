import { Box } from '@material-ui/core'
import './Menu.css'

export default function Menu() {
    return (
        <Box>
            <Box className="menu">
                <Box className="list1">
                    <span>Shop</span>
                    <span>Read</span>
                    <span>Stores</span>
                    <span>Search</span>
                </Box>
                <Box className="list2">
                    <span>Login</span>
                    <span>Cart</span>
                </Box>
            </Box>
            <Box className="navslider">
                <Box style={{margin:"3% 0 0 80%"}}>
                    <span>Cart</span>
                    </Box>  
                <Box className="sidebar">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </Box>
            </Box>    
        </Box>
    )
}

