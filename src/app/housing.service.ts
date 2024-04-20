import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';	

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }

  submitApplication(firstName: string, lasName: string, email: string){
    console.log(`Home application received: \n Nome: ${firstName} ${lasName} \n E-mail ${email}`);
  }
}
