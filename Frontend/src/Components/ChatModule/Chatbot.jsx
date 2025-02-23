import Styles from "./Chatbot.module.css";
import Logo from "/logo.svg";
import Sidebar from "../Sidebar/Sidebar";
import Upload from "/Upload.svg";
import Attachment from "/Attachment.svg";
import icon from "/icon.svg";
import seperator from "/seperator.svg";
const Chatbot = () => {
    const handleInfoClick = () => {
      alert("Info Icon Clicked!"); 
    };

    const handleAttachClick = () => {
      document.getElementById("fileInput").click(); 
    };

    return (
      <>
        <div className={Styles.mainContainer}>
          <Sidebar />
          <div className={Styles.chatSection}>
            <img src={Logo} alt="logo" className={Styles.logo} />
            <div className={Styles.chatContainer}>
              <div className={Styles.chatModule}>
                <div className={Styles.iconMain}>
                  <img src={icon} alt="logo" className={Styles.icon} />
                </div>

                <div className={Styles.chatbox}>
                  <p className={Styles.question}>What you want to ask today?</p>
                  <div className={Styles.Options}>
                    <button className={Styles.option}>Symptom Analysis</button>
                    <button className={Styles.option}>Report Analysis</button>
                    <button className={Styles.option}>Find a Doctor</button>
                  </div>
                </div>
              </div>
              <div className={Styles.InputContainer}>
                <div className={Styles.IconContainer}>
                  <button className={Styles.IconButton}>
                    <img src={Upload} alt="Info" className={Styles.Icon} />
                  </button>
                  <button
                    className={Styles.IconButton}
                    onClick={handleAttachClick}
                  >
                    <img
                      src={Attachment}
                      alt="Attach"
                      className={Styles.Icon}
                    />
                  </button>
                  <input
                    type="file"
                    id="fileInput"
                    className={Styles.HiddenFileInput}
                  />
                </div>

                <div className={Styles.Separator}>
                  <img
                    src={seperator}
                    alt="Info"
                    className={Styles.Separator}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Your message..."
                  className={Styles.InputField}
                />
              </div>
              <div className={Styles.bottom}>
                <p>
                  Please double-check with a healthcare professional for
                  accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Chatbot;