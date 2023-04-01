import { createRouter, createWebHistory} from 'vue-router';
import CardsDetails from '../../views/CardsDetails.vue';
import HomePage from '../../views/HomePage';
import ContactUs from '../../views/ContactUs';
import AboutUs from '../../views/AboutUs';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'CardsDetails',
        path: '/cardsdetails',
        component: CardsDetails
    },
    {
        name: 'AboutUs',
        path: '/aboutus',
        component: AboutUs
    },
    {
        name: 'ContactUs',
        path: '/contactus',
        component: ContactUs
    }
]

const router = createRouter ({

    history: createWebHistory(),
    routes
})

export default router;