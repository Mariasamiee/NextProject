import type React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

interface chProps {
    children: React.ReactNode
}

function MainLayout({ children }: chProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default MainLayout
