import { AlignJustify, LogOut } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/auth-slice";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";


function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          <Link to={'/shop/home'}>

            Logout
          </Link>
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
