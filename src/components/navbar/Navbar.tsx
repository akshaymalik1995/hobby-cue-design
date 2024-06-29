import Logo from "./Logo";
import Menus from "./Menus";
import SearchBar from "./SearchBar";
import MobileMenus from "./MobileMenus";

export default function Navbar() {
  return (
    <div className="h-[80px] relative bg-white shadow-md flex items-center justify-start">
      <div className="container px-4 justify-between mx-auto flex items-center">
        <div className="hidden xl:flex items-center gap-12">
          <Logo />
          <SearchBar />
        </div>
        <div className="xl:hidden">
          <Logo small={true} />
        </div>
        <div className="hidden xl:flex">
          <Menus />
        </div>

        <div className="xl:hidden">
          <MobileMenus />
        </div>
      </div>
    </div>
  );
}
