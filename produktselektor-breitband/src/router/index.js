import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import store from "@/store/index";
import ZuhausePlusTwoPlay from "@/components/templates/ZuhausePlusTwoPlay.vue";
import ZuhausePlusThreePlay from "@/components/templates/ZuhausePlusThreePlay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/internet-phone-250", // 250 as default; TODO: refactor for 3play?
    name: "home"
    // component:
    //   store.getters.getLastSeenProduct.length > 1
    //     ? ZuhausePlusThreePlay
    //     : ZuhausePlusTwoPlay,
    // meta: {
    //   title: "Internet, Telefon und Kabelfernsehen von Vodafone"
    // },
    // props: {
    //   default: true,
    //   // Why was this in ZH+ used?
    //   activeProduct:
    //     store.getters.getLastSeenProduct !== ""
    //       ? store.getters.getLastSeenProduct
    //       : ["2P_RIP_250_1"]
    //   // instead of this:
    //   // activeProduct: ["2P_RIP_250_1", "HRZ_TV_0420_1"]
    // },
    // beforeEnter(to, from, next) {
    //   if (store.getters.getLastSeenProduct !== "") {
    //     store.dispatch("setActiveProduct", store.getters.getLastSeenProduct);
    //   } else {
    //     store.dispatch("setActiveProduct", ["2P_RIP_250_1"]);
    //   }
    //   next();
    // }
  },
  {
    path: "/internet-phone-tv-1000",
    name: "three-play-internet-phone-tv-1000",
    component: ZuhausePlusThreePlay,
    meta: {
      title: "Red Internet und Telefon 1000 Cable mit TV"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_1000_1", "HRZ_TV_0420_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_1000_1", "HRZ_TV_0420_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-tv-500",
    name: "three-play-internet-phone-tv-500",
    component: ZuhausePlusThreePlay,
    meta: {
      title: "Red Internet und Telefon 500 Cable mit TV"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_500_1", "HRZ_TV_0420_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_500_1", "HRZ_TV_0420_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-tv-250",
    name: "three-play-internet-phone-tv-250",
    component: ZuhausePlusThreePlay,
    meta: {
      title: "Red Internet und Telefon 250 Cable mit TV"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_250_1", "HRZ_TV_0420_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_250_1", "HRZ_TV_0420_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-tv-100",
    name: "Red Internet and Phone Cable 100 mit Horizon TV",
    component: ZuhausePlusThreePlay,
    meta: {
      title: "Red Internet and Phone Cable 100"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_100_1", "HRZ_TV_0420_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_100_1", "HRZ_TV_0420_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-tv-50",
    name: "three-play-internet-phone-tv-50",
    component: ZuhausePlusThreePlay,
    meta: {
      title: "Red Internet und Telefon 50 Cable mit TV"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_50_1", "HRZ_TV_0420_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_50_1", "HRZ_TV_0420_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-1000",
    name: "two-play-internet-phone-1000",
    component: ZuhausePlusTwoPlay,
    meta: {
      title: "Red Internet und Telefon 1000 Cable"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_1000_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_1000_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-500",
    name: "two-play-internet-phone-500",
    component: ZuhausePlusTwoPlay,
    meta: {
      title: "Red Internet und Telefon 500 Cable"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_500_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_500_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-250",
    name: "two-play-internet-phone-250",
    component: ZuhausePlusTwoPlay,
    meta: {
      title: "Red Internet und Telefon 250 Cable"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_250_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_250_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-100",
    name: "Red Internet and Phone Cable 100",
    component: ZuhausePlusTwoPlay,
    meta: {
      title: "Red Internet and Phone Cable 100"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_100_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_100_1"]);
      next();
    }
  },
  {
    path: "/internet-phone-50",
    name: "two-play-internet-phone-50",
    component: ZuhausePlusTwoPlay,
    meta: {
      title: "Red Internet und Telefon 50 Cable"
    },
    props: {
      default: true,
      activeProduct: ["2P_RIP_50_1"]
    },
    beforeEnter(to, from, next) {
      store.dispatch("setActiveProduct", ["2P_RIP_50_1"]);
      next();
    }
  }
];

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  routes
});

export default router;
