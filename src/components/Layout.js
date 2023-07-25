import { Outlet } from "react-router-dom";
import Header from "./Header"; 

const Layout = () => {
  return (
    <>
    <header>
              <Header />
    </header>
    <main style={{marginTop:80, marginBottom:30,}}>
      <Outlet />
    </main>
    </>
  );
};

export default Layout;