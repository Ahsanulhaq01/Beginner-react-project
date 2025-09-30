import  {useRef} from 'react';
import { FiSearch } from 'react-icons/fi';

function Header({inputvalue , setInputValue , getData}) {
     const refSearchButton = useRef(null);
    function handleSearchButton() {
    getData(inputvalue);
    setInputValue("");
  }
    function HandlekeyDown(event) {
    if (event.key === "Enter") {
      refSearchButton.current.click();
      getData(inputvalue);
      setInputValue("");
    }
  }
  function handleOnChange(event) {
    setInputValue(event.target.value.toUpperCase());
  }
  return (
    <>
     <div className="nav-container">
            <input
              onChange={handleOnChange}
              onKeyDown={HandlekeyDown}
              value={inputvalue}
              placeholder="Enter the city name"
              className="input-element"
            />
            <button
              onClick={handleSearchButton}
              ref={refSearchButton}
              className="search-button"
            >
              <FiSearch size={18} className="search-button" />
            </button>
          </div>
    </>
  )
}

export default Header