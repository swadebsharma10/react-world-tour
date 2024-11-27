import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";


const Countries = () => {
      const [countries, setCountries] = useState([]);
      const [visitCountry, setVisitCountry] = useState([]);
      const [visited, setVisited] = useState(false);

      const handleVisited =(country)=>{
           const newVisitedCountries = [...visitCountry, country]
            setVisitCountry(newVisitedCountries)
      }

      useEffect(()=>{
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data =>{
                  // console.log(data);
                  setCountries(data)
            })
      }, []);

      return (
            <div>
                 <h2 className="text-4xl font-bold text-center my-8">World Tour: {countries.length}</h2> 
                 <h2 className="text-4xl font-bold text-center my-8">Visited: {visitCountry.length}</h2> 
                 <div>
                  {
                        visitCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
                 </div>
                 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                 {
                  countries.map((country, idx) => <Country
                  key={idx}
                  country={country}
                  onAdd={handleVisited}
                  setVisited={setVisited}
                  visited={visited}
                  ></Country>)
                 }
                 </div>
            </div>
      );
};

export default Countries;