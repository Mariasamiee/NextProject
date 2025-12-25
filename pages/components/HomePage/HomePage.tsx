import { useRouter } from "next/router";
import ExploreSection from "../../{components}/ExploreSection/ExploreSection"
import Header from "../../{components}/Header/Header"

function HomePage() {
       const router = useRouter();

  const handleSelectCategory = (category: string) => {
    router.push({
      pathname: "/products",
      query: { category },
    });
  };

    return (
        <>
            <Header />
            <ExploreSection SelectCategory={handleSelectCategory}/>
        </>
    )
}

export default HomePage