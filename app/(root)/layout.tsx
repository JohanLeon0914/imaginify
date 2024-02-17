import MobileNav from "@/components/Shared/MobileNav";
import Sidebar from "@/components/Shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrappper">
            {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
