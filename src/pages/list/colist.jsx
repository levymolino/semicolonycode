import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Codatatable from "../../components/datatable/Codatatable";

const Colist = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Codatatable />
      </div>
    </div>
  );
};

export default Colist;
