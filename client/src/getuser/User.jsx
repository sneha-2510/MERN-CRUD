import "./user.css"
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";


const User = () => {

    const buttonStyles = {
        backgroundColor: 'inherit'
    };

    return (
        <div className="userTable">
            <button type="button" className="btn btn-primary"> Add User +
            </button>



            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">S.NO.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john@gmail.com</td>
                        <td>New York, USA</td>

                        <td className="actionButtons">
                            <button type="button" className="btn btn-outline-info" style={buttonStyles}>
                                <FaPenToSquare />
                            </button>


                            <button type="button" className="btn btn-outline-danger" style={buttonStyles}>
                                <FaTrash />
                            </button>


                        </td>
                    </tr>

                </tbody>
            </table>
        </div>)
}

export default User