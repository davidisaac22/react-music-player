import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({libraryStatus,setLibraryStatus}) {
    return(
        <div className="nav">
            <h1>Waves</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <p>Library</p>
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    )
};

export default Nav;