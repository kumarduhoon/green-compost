import React from 'react'
import HeroBanner from "../components/comman/HeroBanner"
import our_Products from "../assets/images/product/our_product.png"
import OurProducts from '../components/ourProduct/OurProduct'
import ProductsCards from '../components/ourProduct/ProductsCards'
import OurMachine from '../components/about/OurMachine'
import WrokingProcessMachine from '../components/about/WrokingProcessMachine'

function OurProduct() {
    return (
        <React.Fragment>
            <HeroBanner
                heroImage={our_Products}
            />
            <OurProducts />
            <ProductsCards />
            <OurMachine />
            <WrokingProcessMachine />
        </React.Fragment>
    )
}

export default OurProduct