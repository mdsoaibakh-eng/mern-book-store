import { Link } from "react-router-dom"; 
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
    return (
        <div>
            <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700 mb-4">
                <FiArrowLeft className="mr-2" />
                Back to Home
            </Link>
        </div>
    );
}
export default BackButton;
