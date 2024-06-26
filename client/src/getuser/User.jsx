import { useEffect, useState } from "react";
import axios from 'axios'
import "./user.css"
import { FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast"


const User = () => {

    // connecting with backend
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/allusers")
                setUsers(response.data)
            }
            catch (error) {
                console.log("error while fetching data ", error)
            }
        };
        fetchData()
    }, []);

    const deleteUser = async (userId) => {
        await axios
            .delete(`http://localhost:8000/api/delete/user/${userId}`)
            .then((response) => {
                setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
                toast.success(response.data.message, { position: "top-right" });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const buttonStyles = {
        backgroundColor: 'inherit'
    };

    return (
        <div className="userTable">
            <Link to="/add" type="button" className="btn btn-primary"> Add User +
            </Link>

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
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>

                                <td className="actionButtons">
                                    <Link to={`/update/` + user._id}
                                        type="button" className="btn btn-outline-info" style={buttonStyles}>
                                        <FaPenToSquare />
                                    </Link>


                                    <button
                                        onClick={() => deleteUser(user._id)}
                                        type="button"
                                        class="btn btn-danger"
                                        style={buttonStyles}
                                    >
                                        <FaTrash />
                                    </button>


                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
}

export default User