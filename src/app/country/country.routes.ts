import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page';

export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },

      {
        path: 'by-country',
        component: ByCountryPageComponent
      },

      {
        path: 'by-region',
        component: ByRegionPageComponent
      },

      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  }

];


export default countryRoutes
