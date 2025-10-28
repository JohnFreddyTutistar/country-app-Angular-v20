import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {

    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountrytoCountryArray(restCountries)),
        catchError(error => {
          console.log(error)

          return throwError(() => new Error(`No existe la capital ${query}, intenta nuevamente`))
        })
      )

  }

  searchByCountry( query: string ): Observable<Country[]> {

    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountrytoCountryArray(restCountries)),
        catchError(error => {
          console.log(error)

          return throwError(() => new Error(`No existe el país ${query}, intenta nuevamente`))
        })
      )

  }

  searchCountryByAlphaCode( code: string ) {

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
      .pipe(
        map(restCountries => CountryMapper.mapRestCountrytoCountryArray(restCountries)),
        map( countries => countries.at(0) ),
        catchError(error => {
          console.log(error)

          return throwError(() => new Error(`No existe el país con ese código ${code}`))
        })
      )

  }

}
