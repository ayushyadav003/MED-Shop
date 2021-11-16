import { Box } from '@material-ui/core'
import Menu from './menu/Menu'
import './Product.css'
import ProductInfo from './item/ProductInfo'
import Chat from '../plug-in/Chat'

export default function Product() {
    const url ="https://www.aesop.com/u1nb1km7t5q7/2fnqAzD3tlKnIju5Q4h0C4/5357fca38d9ee9407d92ac48f34525e8/Aesop-Skin-Gentle-Facial-Cleansing-Milk-100mL-Large-782x796px.png"
    return (
        <Box style={{paddingRight:"15px", background:"rgb(255,256,243)", paddingBottom:"4rem"}}>
            <Menu />
            <Box className="center">
                <Box className="left">
                    <h1>Aesop   </h1>
                </Box>
                <Box className="product">
                    <img src={url} alt="bottle"  height="450px" />
                </Box>
                <ProductInfo />
                <Chat/>
            </Box>
        </Box>
    )
}   
