import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import AllRecipes from './AllRecipes';

const SearchDrinks = () => {
  const [apiData, setApiData] = React.useState([]);
  const [search, setSearch] = React.useState('Cocktail');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSearch(event.target.elements.searchbar.value);
    console.log(search);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        setApiData(response.data.drinks);
      });
    setSearch('');
  };

  React.useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        setApiData(response.data.drinks);
      });
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Control
            id="searchbar"
            size="lg"
            type="text"
            placeholder="Search for drinks"
            // value={search}
            onChange={handleChange}
          ></Form.Control>
        </Form.Row>
      </Form>
      <AllRecipes data={apiData}></AllRecipes>
    </>
  );
};

export default SearchDrinks;
