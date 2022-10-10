import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET_ALL_COUNTRIES } from './API';
import Countries from './Components/Countries/index';
import Pagination from './Components/Pagination/index';
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerpage] = useState(10)

  useEffect(() => {
    setLoading(true)
    axios.get(GET_ALL_COUNTRIES)
      .then(response => setCountries(response.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const lastCountryIndex = currentPage * countriesPerpage
  const firstCountryIndex = lastCountryIndex - countriesPerpage
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)

  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)



  return (
    <div>
      <h1 className='h1'>Countries</h1>
      <Countries countries={currentCountries} loading={loading} />
      <div className='parent-btns'>
        <button className='btn1'
          disabled={currentPage == 1 ? true : false}
          onClick={prevPage}>Prev</button>
        <Pagination countriesPerpage={countriesPerpage} totalCountries={countries.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <button className='btn2'
          onClick={nextPage}
          disabled={currentPage == Math.ceil(countries.length / countriesPerpage) ? true : false}>Next</button>
      </div>
    </div>
  );
};

export default App;