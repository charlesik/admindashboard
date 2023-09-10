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
}

function AddProjectsForm({isOpen,onClose,handleChange,handleSubmit,employeeValues}:Props) {
    if (!isOpen) {
        return null;
      }

    return (
      <div className="bg-[#141432] w-[30%] rounded-lg fixed top-0 left-0 right-0 bottom-0 m-auto mt-5">
        <h5 className="text-2xl font-semibold text-left">Add Project</h5>
        <br />
        <form action="" className="m-auto w-[70%]" onSubmit={handleSubmit}>
          <label htmlFor="name">Task:</label> <br />
          <input
            type="text"
            name="name"
            value={employeeValues.name}
            onChange={handleChange}
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            required
          />
          <br />
          <label htmlFor="email">Department:</label>
          <br />
          <input
            type="text"
            name="email"
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            value={employeeValues.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="role">Team Lead</label>
          <br />
          <input
            type="text"
            name="role"
            className="bg-[#1D1D42] w-full rounded-lg h-[50px] mb-3"
            value={employeeValues.role}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-[#2D74FF] text-center h-[45px] rounded-md mt-2">
            Add Project
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

export default AddProjectsForm;