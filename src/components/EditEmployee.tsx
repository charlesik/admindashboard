import { ChangeEvent } from "react";
interface User {
    name: string;
    email: string;
    role: string;
  }

interface Props{
    isOpen: boolean;
    employeeValues:User;
    onClose: ()=> void;
    handleSubmit: (event:React.FormEvent<HTMLFormElement>)=> void;
    handleChange: (event: ChangeEvent<HTMLInputElement>)=> void;
    setEmployeeValues:React.Dispatch<React.SetStateAction<User>>;
}

function EditEmployee({isOpen,onClose,handleSubmit,employeeValues,setEmployeeValues}:Props) {
    if (!isOpen) {
        return null;
      }

    return (
      <div className="bg-[#141432] w-[30%] rounded-lg fixed top-0 left-0 right-0 bottom-0 m-auto mt-5">
        <h5 className="text-2xl font-semibold text-left">Edit Employee</h5>
        <br />
        <form action="" className="m-auto w-[70%]" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            name="name"
            value={employeeValues.name}
            onChange={(e) => setEmployeeValues({ ...employeeValues, name: String(e.target.value) })}
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            value={employeeValues.email}
            onChange={(e) => setEmployeeValues({ ...employeeValues, email: String(e.target.value) })}
            required
          />
          <br />
          <label htmlFor="role">Role</label>
          <br />
          <input
            type="text"
            name="role"
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            value={employeeValues.role}
            onChange={(e) => setEmployeeValues({ ...employeeValues, role: String(e.target.value) })}
            required
          />
          <button className="w-full bg-[#2D74FF] text-center h-[45px] rounded-md mt-2" >
            Edit Employee
          </button>
          <button
            className="w-full border border-[#2D74FF] text-[#2D74FF] text-center h-[45px] rounded-md mt-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    );
}

export default EditEmployee;