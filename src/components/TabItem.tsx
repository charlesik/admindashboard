interface Props{
    activeTab:string;
    id:string;
    name:string;
    setActiveTab:React.Dispatch<React.SetStateAction<string>>;
}

function TabItem({activeTab,id,name,setActiveTab}: Props) {
    function handleClick(event: React.MouseEvent<HTMLLIElement>){
        event.preventDefault()
        setActiveTab(id);
    }
    return (
        
        <div>
             <li
            className={`list none font-semibold hover:bg-[#27274F] h-[40px] pt-2 ${
              activeTab === id ? "bg-[#27274F]" : ""
            }`}
            id="dashboard"
            onClick={handleClick}
          >
            {name}
          </li>
        </div>
    );
}

export default TabItem;