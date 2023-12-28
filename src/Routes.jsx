import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import RootLayout from "./layouts/main/RootLayout";
import HomePage from "./pages/home/HomePage";
import ShopePage from "./pages/shop/ShopPage";
  
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout />} errorElement="Not Found">
            <Route index element={<HomePage />}></Route>
            <Route path="shop" element={<ShopePage />}></Route>
        </Route>
    )
)