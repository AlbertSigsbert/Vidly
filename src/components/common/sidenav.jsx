import React from "react";
const SideNav = (props) => {
  const { navItems: genres, currentGenre, onGenreChange } = props;

  return (
    <ul className="list-group">
      <li key="all-genres" className="list-group-item active">
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          key={genre._id}
          style={ {cursor:'pointer'} }
          className={genre.name === currentGenre ? 'list-group-item active' : 'list-group-item'}
          onClick={() => onGenreChange(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
