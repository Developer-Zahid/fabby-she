import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import RootLayout from "./layouts/main/RootLayout";
import CategoryPage from "./pages/category/CategoryPage";
import ClientError from "./pages/errors/ClientError";
import HomePage from "./pages/home/HomePage";
import SingleProduct from "./pages/product/SingleProduct";
import ShopePage from "./pages/shop/ShopPage";
import bestsellerProductData from './data/bestseller-product.json'
import CartPage from "./pages/cart/CartPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout />} errorElement={<ClientError />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopePage />} />
            <Route
                path="product/:productId"
                element={<SingleProduct />}
                loader={({params})=>{
                    return bestsellerProductData.find(item => item.id == params.productId)
                }}
            />
            <Route path="category" element={<CategoryPage />} />
            <Route path="cart" element={<CartPage />} />
        </Route>
    )
)