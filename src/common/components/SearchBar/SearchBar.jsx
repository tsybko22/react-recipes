import clsx from 'clsx';
import { createRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import CustomInput from '../CustomInput';

import classes from './SearchBar.module.scss';

const SearchBar = ({ className, ...props }) => {
  const [value, setValue] = useState('');
  const inputRef = createRef(null);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`/search/${value.toLowerCase()}`);
    setValue('');
    inputRef.current.blur();
  };

  return (
    <form
      className={clsx(classes.searchForm, className)}
      autoComplete='off'
      onSubmit={handleSubmit}
      {...props}
    >
      <AiOutlineSearch className={classes.searchIcon} />
      <CustomInput
        ref={inputRef}
        type='search'
        name='search-recipe'
        aria-label='Search recipe'
        placeholder='Search recipe'
        className={classes.searchInput}
        value={value}
        setValue={setValue}
        required
      />
      <button className={classes.searchBtn} type='submit'>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
