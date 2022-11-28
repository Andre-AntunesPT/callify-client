import React from "react";

function Flipbox() {
  return (
    <>
      <div className="centerflipcards">
        <div class="square-flip">
          <div className="square">
            <div className="square-container">
              <h2 className="textshadow">Webinar</h2>
              <h3 className="textshadow">
              Create rooms to host reliable webinars for better engagement.{" "}
              </h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>Create Webinar</h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
        <div class="square-flip">
          <div className="square">
            <div className="square-container">
              <h2 className="textshadow">E-Learning</h2>
              <h3 className="textshadow">
                Personalized room made for your needs.{" "}
              </h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>Create E-Learning</h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
        <div class="square-flip">
          <div className="square">
            <div className="square-container">
              <h2 className="textshadow">Team Meeting</h2>
              <h3 className="textshadow">
                Meetings made simple so you can be more productive.{" "}
              </h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>Create Meeting Room</h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
        <div class="square-flip">
          <div className="square">
            <div className="square-container">
              <h2 className="textshadow">Telehealth</h2>
              <h3 className="textshadow">
                Rooms with a unique settings to connect health professionals and patients.{" "}
              </h3>
            </div>
            <div className="flip-overlay"></div>
          </div>
          <div className="square2">
            <div className="square-container2">
              <div className="align-center"></div>
              <h2>Create Telehealth Room </h2>
            </div>
            <div className="flip-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flipbox;
