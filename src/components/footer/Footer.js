import './Footer.css' 
export default function Footer() {

 
  return (
    <div className="overall">
      <div className="not">
         <div className="bigbox1">
          <input className="inputstyle" type="text" placeholder="Email adress" />
          <span style={{marginTop:"15 px"}}>
          <input style={{marginRight:"10px"}} type="checkbox"/>
            Subscribe to receive communications from Aesop about our products
            and services. By subscribing, you confirm you have read and accept
            our spanrivacy policy
          </span>  
        </div>
        <div className="all1">
        <div className="smallbox">   
          <span className="tittle">Orders and support</span>
            <span>contact us</span>
            <span>FAQs</span>
            <span>Shipping</span>
            <span>Returns</span>
            <span>Terms and conditions</span>
        </div>

        
        <div className="smallbox">
          <span className="tittle">Services</span>
            <span>Live assistance</span>
            <span>Corporate gifts</span>
            <span>Facial appointments</span>
        </div>

        <div className="smallbox">
          <span className="tittle">Location preferences</span>
            <span>Shipping: Hong Kong (S.A.R)</span>
            <span>Language: English</span>
        </div>
        </div>  
      </div>
      <div className="all">
        <div className="bigbox">
          <span className="tittle">Sustainability</span>
          <span className="">
            All Aesop products are vegan, and we do not test our formulations
            or ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </span>
        </div>
        <div className="smallbox">
          <span className="tittle">About</span>
            <span>Our story</span>
            <span>Foundation</span>
            <span>Careers</span>
            <span>Privacy policy</span>
            <span>Accessibility</span>
        </div>
        <div className="smallbox">
          <span className="tittle">Social media</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span> WeChat</span>
            <span>Weibo</span>
        </div>
      </div>
         <div className="mark">
          © Aesop
          </div>
    </div>
  )  

}