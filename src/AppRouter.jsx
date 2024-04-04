// import {
//     RouterProvider,
//     BrowserRouter,
//     Route,
//     Routes,
//     createBrowserRouter,
//   } from "react-router-dom";


// import Body from "./Components/Body";
// import Header from "./Components/Header";
// import Footer from "./Components/footer";


//   const router = createBrowserRouter([
//     { path: "/", element: <Header/> },
//     { path: "/thief", element: <Body/> },
//     { path: "/class-work-3", Component: <Footer/> },
//   ]);
  
//   export const RouterProviderApp = () => {
//     return <RouterProvider router={router} />;
//   };




import {
    RouterProvider,
    BrowserRouter,
    Route,
    Routes,
    createBrowserRouter,
  } from "react-router-dom";
  
//   import { Body } from "./components/Body";
  import  Header  from "./Components/Header";
  import Footer from "./Components/Footer"
  // import {AxiosPageApi} from "./Components/AxiosPageApi";


  
//   export const BrowserRouterApp = () =>{
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Header />} />
//           <Route path="/class-work-3" element={<Footer/>} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
  
//   export const BrowserRouterWithMapApp = () =>{
//     const routes = [
//       { path: "/", page: <WorkinigWithAPIArray /> },
//       { path: "/thief", page: <ClassWorkTwo /> },
//       { path: "/ebere", page: <WorkinigWithAPI />},
//       { path: "/class-work-3", page: <ClassWorkThree /> },
//     ];
    // return (
    //   <BrowserRouter>
    //     <Routes>
    //       {routes.map((route) => {
    //         return (
    //           <Route
    //             key={route.path}
    //             path={route.path}
    //             element={route.page}
    //           />
    //         );
    //       })}
    //     </Routes>
    //   </BrowserRouter>
//     );
//   }
  
  const router = createBrowserRouter([
    { path: "/", element: <Header/> },
    { path: "/salem", element: <Header/> },
    // { path: "/thief/rara", element: <Body/> },
    { path: "/ebere", Component: Footer},
    // {path: "/miracle", Component : AxiosPageApi}
  ]);
  
  export const RouterProviderApp = () => {
    return (<RouterProvider router={router} />);
  };