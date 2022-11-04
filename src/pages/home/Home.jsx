import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Lottie from "lottie-react";
import animationData from "./lottiefiles/friends.json";
import colonyData from "./lottiefiles/colony.json";
import friendsData from "./lottiefiles/friendlist.json";
import projectData from "./lottiefiles/project.json";
import Datatable from "../../components/datatable/Datatable";
import Codatatable from "../../components/datatable/Codatatable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <div className="card" style={{ width: "15" }}>
            <div className="card-img-top">
              <Lottie
                animationData={animationData}
                height={20}
                width={20}
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Members</h5>
              <p className="card-text">
                All of your colony members in their respective field.
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Launch Members
              </button>
            </div>
          </div>
          <div className="card" style={{ width: "15" }}>
            <Lottie animationData={colonyData} height={20} width={20} />
            <div className="card-body">
              <h5 className="card-title">Colony</h5>
              <p className="card-text">
                All of your associated colony in one area. Connect with your
                colony.
              </p>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Launch Colony
              </button>
            </div>
          </div>
          <div className="card" style={{ width: "15" }}>
            <Lottie animationData={friendsData} height={20} width={20} />
            <div className="card-body">
              <h5 className="card-title">Friends</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-primary">
                Launch demo modal
              </button>
            </div>
          </div>
          <div className="card" style={{ width: "15" }}>
            <Lottie animationData={projectData} height={20} width={20} />
            <div className="card-body">
              <h5 className="card-title">Project</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button type="button" class="btn btn-primary">
                Toggle bottom offcanvas
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div class="modal-dialog modal-xl" data-backdrop="false">
          <div class="modal-content" data-backdrop="false">
            <div class="modal-header" data-backdrop="false">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Datatable />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                data-backdrop="false"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>



      <div
        class="modal"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div class="modal-dialog modal-xl" data-backdrop="false">
          <div class="modal-content" data-backdrop="false">
            <div class="modal-header" data-backdrop="false">
              <h1 class="modal-title fs-5" id="exampleModalLabel2">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Codatatable />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                data-backdrop="false"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
};

export default Home;
