import Tabs from "../components/Tabs";
import TabContent from "../components/TabContent";
import { useState } from "react";
import Dashboard from "../components/AllTabs/Dashboard";
import Projects from "../components/AllTabs/Projects";
import Employees from "../components/AllTabs/Employees";

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");
    return (
      <div className="flex">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className=" w-full">
          <TabContent id="dashboard" activeTab={activeTab}>
            <Dashboard />
          </TabContent>
          <TabContent id="employees" activeTab={activeTab}>
            <Employees/>
          </TabContent>
          <TabContent id="projects" activeTab={activeTab}>
            <Projects/>
          </TabContent>
        </div>
      </div>
    );
}

export default AdminDashboard;