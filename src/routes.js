import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, MEDICINE_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/shop";
import MedicinePage from "./pages/MedicinePage";

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component:Shop
    },

    {
        path: MEDICINE_ROUTE + '/id',
        Component:MedicinePage
    },

    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]



