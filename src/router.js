import {createWebHistory, createRouter} from "vue-router";
import MainPage from "./components/MainPage.vue";
import PaymentPage from "./components/PaymentPage.vue";

const history = createWebHistory();
const routes = [
    {
        path: "/",
        redirect: "/main-page"
    },

    {
        path: "/main-page",
        component: MainPage
    },

    {
        path: "/payment",
        component: PaymentPage
    }
];

const router = createRouter({history, routes});
export default router;
