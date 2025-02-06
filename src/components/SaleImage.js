//Component 3 - SALE IMAGE

import sale from '../assets/sale.jpg'

function SaleImage()
{
  return(
    <div  className="sale-image" alt="Sale Image">
         <img src={sale} alt="SaleImage"></img>
         <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top courses for just 499.Just a one say to save but a lifetime to learn</p>
         </div>
    </div>
  )
}
export default SaleImage