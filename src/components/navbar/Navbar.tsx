import Logo from "./Logo";
import Menus from "./Menus";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="h-[80px] flex items-center justify-start">
      <div className="container justify-between mx-auto flex items-center">
        <div className="flex items-center gap-12">
          <Logo />
          <SearchBar />
        </div>
        <div>
          <Menus />
        </div>
      </div>
    </div>
  );
}
