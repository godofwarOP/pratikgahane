import "./search.css";
import types from "prop-types";

export default function Search({ handleInputChange }) {
  return (
    <div className="search">
      <input
        className="search_bar"
        type="search"
        onChange={handleInputChange}
        placeholder="Search ads"
      />
    </div>
  );
}

Search.propTypes = {
  handleInputChange: types.func,
};
