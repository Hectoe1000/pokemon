// src/app/services/poke-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'; // URL base de la API

  constructor(private http: HttpClient) {}

  /**
   * Obtiene información detallada de los primeros 20 Pokémon.
   * Incluye su nombre y la URL de la imagen.
   */
  getPokemons(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=20`).pipe(
      map((response) => {
        return response.results.map((poke: any, index: number) => ({
          name: poke.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
      })
    );
  }

 
}
