import CountryDetails from "./CountryDetails";

const Country = ({ country, onAdd, visited }) => {
  const { flags, name, region, population, capital } = country;

  return (
    <div
      className={`${visited && "bg-sky-400"} border border-red-400 p-4 rounded`}
    >
      <img className="w-72 h-40" src={flags.png} alt="Flags" />
      <h3>Name: {name?.common}</h3>
      <h4>Capital: {capital}</h4>
      <h4>Region:{region}</h4>
      <p>Populations: {population}</p>
      <button
       onClick={()=> onAdd(country)}
        className=" btn bg-orange-400 p-1 rounded-md hover:bg-blue-400"
      >
        {visited ? "Visited" : "Visit"}
      </button>
      {visited && ` I have Visited this Country`}
      <hr />
      <CountryDetails
      country={country}
      onAdd={onAdd}
      ></CountryDetails>
    </div>
  );
};

export default Country;
