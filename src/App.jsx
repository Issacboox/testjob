import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";
import Content from "./component/Content/Content";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 lg:pl-80">
        {/* content */}
        <Content />
      </div>
    </div>
  );
}

export default App;
