import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const handleNavigation = ({ url }) => {
    navigate(`/${url}`);
};
export default handleNavigation