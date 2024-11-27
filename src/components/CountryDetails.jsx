import CountryData from "./CountryData";


const CountryDetails = ({country, onAdd}) => {
      return (
            <div>
                Country Details  
                <hr />
                <CountryData
                country={country}
                onAdd={onAdd}
                ></CountryData>
            </div>
      );
};

export default CountryDetails;