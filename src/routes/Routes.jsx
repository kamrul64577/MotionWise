import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ContactForm from "../pages/Home/ContactForm";
import AppointmentForm from "../pages/AppointmentBook/AppointmentForm";
import CalendlyWidgets from "../pages/Calandly/CalendlyWidgets";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
        
            },
            {
                path: '/book',
                element: <ContactForm/>
            },
            {
                path: '/app',
                element: <AppointmentForm/>
            },
            {
                path: '/appt',
                element: <CalendlyWidgets/>
            }
        ]
    },
]);

export default Routes
