import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {

    const {loading,logout} = useLogout()

    return (
        <div className="mt-auto">
            {!loading ? (
                <p className="flex  font-semibold text-lg items-center gap-1 cursor-pointer" onClick={logout}><BiLogOut className="w-6 h-6  cursor-pointer" />Logout</p>
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;