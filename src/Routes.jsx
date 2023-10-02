import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RootLayout from "./layouts/main/RootLayout";
  
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={ <RootLayout />}>
            <Route index element={<HomePage />}></Route>
        </Route>
    )
);