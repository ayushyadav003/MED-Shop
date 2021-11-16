import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProductList.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1
    }
  };

  const data =[
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/78baSSIGuV9yVyescL3EkO/d7aa29bbc32344b4d373233f55731781/Aesop-Skin-Remove-60mL-large.png",
            name :"Remove",
            decs:"Makeuo removerfor the delicate eye area"
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/6NBAt8Ax6aPRmnvTs3oq3h/00987a956e92b2468a0daa4090c85e76/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png",
            name :"B & Tea Balancing toner ",
            decs:"Balancing nad hydratting , a light finish"
      
        },
        {
            image: "https://www.aesop.com/u1nb1km7t5q7/5EM8cNCKUmSUw5Ad9vg3d1/73b569f7bcb04bafc22cd73e519d3f2a/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png",
            name :"B & Tea Balancing tone", 
            decs:"Balancing nad hydratting , a light finish"

        }
  ]

export default function ProductList () {
    return (
        <div style={{paddingBottom:"15rem", height:"50rem", paddingTop:"8rem"}}>
            <Carousel 
             responsive={responsive}
            >
                <div className="item1">   
                    <h3 style={{marginBottom:"25px"}}>Accompany with</h3>
                    <span>Alcohol-free B & Tea Balancing Toner refines pores and prepares skin for hydration;
                        combination skin is suited to Mandarin Facial Hydrating Cream, and drier skin to 
                        Camellia Nut Facial Hydrating Cream. </span>
                    <span>Twice weekly, blend chosen hydrator with Fabulous Face Oil to detoxify and balance skin.</span>     
                </div>    
                {
                    data.map((product)=>
                        <div className="tc" style={{width:"fitContent",display:"grid"}}>
                            <img className="pl5" src={product.image} alt="" height="400px" />
                            <span style={{fontWeight:"500", padding:"0"}}>{product.name}</span>
                            <span>{product.decs}</span>
                        </div>   
                    )
                }
            </Carousel>
        </div>
    )
}
