
interface Props{
    activeTab:string;
    id:string;
    children: React.ReactNode;
}
function TabContent({activeTab,id,children} :Props) {
    return (
        activeTab === id ? <div className="">
          { children }
        </div>
        : null
      );
}

export default TabContent;