import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../{core}/config/api"; 
import { Product } from "../{components}/types/product";

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;

  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);

  // گرفتن همه محصولات
  useEffect(() => {
    api.get("/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // فیلتر بر اساس category
  useEffect(() => {
    if (category) {
      setFiltered(
        products.filter(
          (item) => item.category === category
        )
      );
    } else {
      setFiltered(products);
    }
  }, [category, products]);

  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-3xl font-bold mb-8">
        Products {category && `- ${category}`}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="border rounded-xl p-4">
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}
