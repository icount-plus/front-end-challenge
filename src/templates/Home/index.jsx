import './index.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//importes de componentes
import { SearchBar } from '../../components/SearchBar'
import { ListContainer } from '../../components/ListContainer';
import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading';

import Cruz from '../../assets/cruz.png'

function Home() {

  //estados da aplicação
  const [data, setData] = useState({});
  const [fullData, setFullData] = useState({});
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  //constantes
  const DATA_PER_PAGE = 15;
  const NO_MORE_DATA = page + DATA_PER_PAGE >= fullData.length;

  console.log(searchValue)

  useEffect(() => {
    getData()
  }, [])

  //funções
  const getData = async () => {
    await axios.get('https://api.publicapis.org/entries', {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => {
      setData(response.data.entries.slice(page, DATA_PER_PAGE))
      setFullData(response.data.entries)
      setIsLoading(false)
    })
    .catch((error) => {
      console.log(error.data);
    })
  }

  console.log(fullData)

  const filteredData = searchValue ?
  fullData.filter(data => {
    return data.API.toLowerCase().includes(
      searchValue.toLowerCase());
  })
  : data;

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  }

  const loadMoreData = () => {
    const nextPage = getNextPage(page, DATA_PER_PAGE)
    const data = getNextData(nextPage, DATA_PER_PAGE)

    setData(data);
    setPage(nextPage);
  }

  function getNextPage(page, DATA_PER_PAGE) {
    const nextPage = page + DATA_PER_PAGE;
    
    return nextPage
  }

  function getNextData(nextPage, DATA_PER_PAGE) {
    const nextData = fullData.slice(nextPage, nextPage + DATA_PER_PAGE)

    data.push(...nextData)
    
    return data
  }

  return (
    <div className="container">
      <div className='search-container'>
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}

        <SearchBar searchValue={searchValue} handleChange={handleChange} />
      </div>

      {isLoading &&
        <Loading />
      }

      {filteredData.length > 0 &&
        <ListContainer data={filteredData} />
      }

      {filteredData.length === 0 &&
        <p className='no-result'>Sem resultados para a pesquisa <img src={Cruz} className="cross" alt="" /></p>
      }

      {!searchValue && !isLoading && (
        <Button
          onClick={loadMoreData}
          disabled={NO_MORE_DATA}
        />
      )}
    </div>
  );
}

export default Home;
