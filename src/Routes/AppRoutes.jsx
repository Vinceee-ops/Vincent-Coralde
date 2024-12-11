import Main from "../Pages/Main";
import Splash from "../Pages/Splash/Splash"

const AppRoutes = [

  {
    path: '/',
    element: <Splash />
  },
  {
    path: '/Main',
    element: <Main />
  },      
];

export default AppRoutes;
