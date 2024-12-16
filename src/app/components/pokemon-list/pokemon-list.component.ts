import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PokeApiService } from '../../Services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'], // Cambiado a styleUrls
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = []; // Lista para almacenar los Pokémon

  constructor(private pokemonService: PokeApiService) {}

  // Método del ciclo de vida para inicializar los datos
  ngOnInit(): void {
    this.getPokemons(); // Llamamos al método para obtener Pokémon
  }

  /**
   * Método para obtener la lista de Pokémon desde el servicio.
   */
  private getPokemons(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (data: any[]) => {
        this.pokemons = data; // Asignamos los datos recibidos
        console.log(this.pokemons); // Ver datos en consola
      },
      error: (err) => {
        console.error('Error al obtener Pokémon:', err); // Registro del error
      },
      complete: () => {
        console.log('Obtención de Pokémon completada'); // Acción al finalizar
      },
    });
  }
}
