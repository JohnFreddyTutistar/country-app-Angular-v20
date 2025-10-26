import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {
  static mapRestCountrytoCountry(restCountry: RESTCountry): Country{
    return {
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No spanish nme',
      population: restCountry.population,
    }
  }

  static mapRestCountrytoCountryArray(restCountries: RESTCountry[]): Country[]{
    return restCountries.map( this.mapRestCountrytoCountry )
  }
}
