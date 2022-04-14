const SearchBox = (props) => {
  const { localization, changeLocalization, search } = props;

  return (
    <form onSubmit={search} className="searchSpace">
      <input
        className="cityInput"
        type="text"
        placeholder="City..."
        onChange={changeLocalization}
        value={localization}
      />
      <button type="submit" className="cityInput_search">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default SearchBox;
