import ufile from "/ufile.svg";
import ufolder from "/ufolder.svg";
import search from "/search.svg"
import Styles from "./Reportvault.module.css";
const Reportvault = () => {
  return (
    <>
      <div className={Styles.maincontainer}>
        <div className={Styles.searchcontainer}>
          <img className={Styles.searchIcon} src={search} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search in Vault"
            className={Styles.Search}
          />
        </div>
        <button className={Styles.filebtn}>
            <img src={ufile} alt="Upload file" />
        </button>
        <button className={Styles.folderbtn}>
            <img src={ufolder} alt="upload folder" />
        </button>
      </div>
    </>
  );
};
export default Reportvault;
