import { createRouter, createWebHistory } from "vue-router";
import Account from "../views/Account.vue";
import Home from "../views/Home.vue";
import InvoiceView from "../views/InvoiceView.vue";
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";


const routes = [
  {
    path: "/Account",
    name: "Account",
    component: Account,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    //////////////////
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
