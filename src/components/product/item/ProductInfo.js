import { Box } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import './ProductInfo.css';

export default function ProductInfo() {
    return (
        <Box className="productinfo">
            <Box className="info1">
                <span>Skin</span>
                <li className="pl2" >Cleanse</li>
            </Box>
            <Box className="info2">
                <h2 style={{fontWeight:"400", fontSize:"30px", width:"90%"}}>Gentle Facial Cleansing Milk</h2>
                <p>An excepionally gentle cleanser for daily use,
                     enhanced with botancal renowned for their soothing properties. 
                     Removes makeup effortlessly and rinses with ease.</p>
            </Box>
            <Box className="info3">
                <span style={{fontSize:"14px",fontWeight:"bold"}}>Suited to</span>
                <span style={{fontSize:"14px",marginTop:"9px"}}>Most skin types, paticular dry and sensitive </span>
            </Box>
            <Box className="info4">
                <span style={{fontSize:"14px",fontWeight:"bold"}}>Skin feel</span>
                <span style={{fontSize:"14px",marginTop:"9px"}}>Cleansed, softened and refreshed</span>
            </Box>
            <Box className="info5">
                <Box style={{display:"flex"}}>
                    <Box>
                        <span style={{fontSize:"14px",fontWeight:"bold"}}>key ingredients</span>
                    </Box>
                    <Box className="addIcon">    
                        <AddCircleOutline />
                    </Box>
                </Box>
                <span style={{fontSize:"14px",marginTop:"4px"}}>Panthenol, Grape Seed, Sandalwood</span>
            </Box>
            <Box className="radio">
                <p style={{fontSize:"14px",fontWeight:"bold"}}>Sizes</p>
                <input style={{marginRight:"5px"}} type="radio" />
                <span style={{fontSize:"14px",marginRight:"5px"}}>100mL</span >
                <input style={{margin:"0 5px 0 15px"}} type="radio" />
                <span style={{fontSize:"14px",marginLeft:"5px",}}>200mL</span>
            </Box>
            <Box>
                <button className="button">Add to your cart-$255.00</button>
            </Box>
        </Box>
    )
}
