import { Injectable } from '@angular/core';
 
import { Country } from './country';
import { Countries } from './country-data';
 
@Injectable()
export class CountryService {
 
  constructor() { }
 
  getCountries(): Country[] {
    return Countries;
  }
 
  getPopulatedCountries(): Country[] {
    return Countries.sort((a, b) => b.population - a.population).slice(0, 3);
  }
 
  getLargestCountries(): Country[] {
    return Countries.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Country[] {
    return Countries.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getCountry(name: string): Country {
    return Countries.find(country => country.name === name);
  }
}