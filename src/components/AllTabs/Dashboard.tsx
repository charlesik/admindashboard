import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import EmployeeList from '../EmployeeList';
import ProjectList from '../ProjectList';


function Dashboard() {
    return (
        <div className=" text-white bg-[#141432] ">
            <div className=" bg-[#1D1D42] h-[50px] flex justify-between px-5 pt-1 border-l-[#FFFFFF] border-l">
                <p className='text-3xl font-bold'>Machi Konsult Staff Dashboard</p>
                <div className='flex justify-around w-[200px]'>
                    <FontAwesomeIcon icon={faBell}/>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <div className=''>
                        <img src="profile pic.jpg" alt="" width={30} height={20} className='rounded-2xl' />
                    </div>
                    <p>Administrator</p>
                </div>
            </div>
            <EmployeeList/>
            <ProjectList/>
            
        </div>
    );
}

export default Dashboard;