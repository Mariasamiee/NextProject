import ExploreSection from "../../{components}/ExploreSection/ExploreSection"
import Header from "../../{components}/Header/Header"
import ProductH from "@/pages/{components}/ProductsH/ProductsH"
import ProductH2 from "@/pages/{components}/ProductH2/ProductH2"
import HeroBanner from "@/pages/{components}/HeroBanner/HeroBanner"

function HomePage() {
     

    return (
        <>
            <Header />
            <ExploreSection/>
            <ProductH/>
            <ProductH2/>
            <HeroBanner/>
        </>
    )
}

export default HomePage