import Styles from "./Sidebar.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <>
      <div className={Styles.sidebar}>
        <div className={Styles.new}>
          <a href="#" className={Styles.newChat}>
            New Chat <IoIosAddCircleOutline />{" "}
          </a>
        </div>
        <div className={Styles.chatRecord}>
          <div className={Styles.recentChats}>
            <p className={Styles.recent}>Yesterday</p>
            <p className={Styles.Chats}>
              Why is Rupam still here ,just to suffer
            </p>
          </div>
          <div className={Styles.oldChats}>
            <p className={Styles.old}>30 Days</p>
            <p className={Styles.Chats}>
              Why is Rupam still here ,just to suffer get some pill.
            </p>
          </div>
        </div>
        <div className={Styles.bottomSection}>
          <div className={Styles.ReportVault}>
            <a href="#">
              <CiFileOn />
              Report Vault
            </a>
          </div>
          <div className={Styles.profile}>
            <a href="#">
              <RiAccountCircleFill />
              My Profile
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
