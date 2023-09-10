import { useState,ChangeEvent } from "react";
import AddEmployeeForm from "./AddEmployeeForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import EditEmployee from "./EditEmployee";


interface User {
    name: string;
    email: string;
    role: string;
  }


function EmployeeList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [employees, setEmployees] = useState<User[]>([]);
    const [employeeValues, setEmployeeValues] = useState<User>({
      name: "",
      email: "",
      role: "",
    });
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmployees([...employees, employeeValues]);
        setEmployeeValues({ name: '', email: '', role: '' });
        setIsModalOpen(false);
        closeEdit()
      };
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEmployeeValues((prevValues) => ({ ...prevValues, [name]: value }));
      };

    const openModal = () => {
        setIsModalOpen(true);
      };
      const openEdit = () => {
        setEditOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
      const closeEdit = () => {
        setEditOpen(false);
      };
      const handleDelete = (index:number) => {
        setEmployees(employees.filter((_, i) => i !== index));
      };
      const updateEmployee=(index:number,email:string)=>{
        openEdit()
        setEmployees(employees.filter((_, i) => i !== index));
        const selectedEmployee= employees.find(employee=> employee.email===email)
        if (selectedEmployee) setEmployeeValues(selectedEmployee)
        console.log(selectedEmployee)
      }
      
      const employeeList=employees.map((employee,index)=>{
        return (
          <tr className="h-[50px] " key={index}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.role}</td>
            <td>
              <button onClick={()=>updateEmployee(index,employee.email)} className="mr-3">
                {" "}
                <FontAwesomeIcon icon={faPen} />{" "}
              </button>{" "}
              <button onClick={() => handleDelete(index)} className="">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        );
      })
    return (
      <div className="bg-[#1D1D42] m-5 rounded-lg">
        <h1 className="font-bold text-xl ml-4 mb-4 ">Employees</h1>
        <table className=" m-auto w-[90%] my-5">
          <thead className="text-left">
            <tr className="">
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Role</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList}
          </tbody>
        </table>
        <div className="text-right">
          <button className="bg-[#2D74FF] h-[40px] rounded-md mr-4 mb-4 w-[160px] " onClick={openModal}>
            + Add Employee
          </button>
        </div>
        <AddEmployeeForm 
        isOpen={isModalOpen} 
        onClose={closeModal}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        employeeValues={employeeValues}/>

<EditEmployee
              isOpen={editOpen}
              onClose={closeEdit}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              employeeValues={employeeValues}
              setEmployeeValues={setEmployeeValues}
            />
      </div>
    );
}

export default EmployeeList;