// Crear un nuevo servicio: movie.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies = [
    {
      id: 1,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      description: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDYwMDU0NTktMjg1MC00ZWNiLWE2ZTQtYzczZWMxZGM3OTJmXkEyXkFqcGc@._V1_FMjpg_UX1080_.jpg',
      reviews: [
        { user: 'Usuario1', rating: 5, comment: '¡Obra maestra!' },
        { user: 'Usuario2', rating: 4, comment: 'Muy buena, aunque algo confusa.' }
      ]
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      director: 'Frank Darabont',
      description: 'Dos hombres encarcelados se unen a lo largo de varios años, encontrando consuelo y eventual redención a través de actos de decencia común.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzdhNGE2ZjAtYjFjYS00YmY2LTg4MDctZTNhN2VlOGM3NjUwXkEyXkFqcGc@._V1_FMjpg_UX1012_.jpg',
      reviews: []
    },
    {
      id: 3,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      director: 'Christopher Nolan',
      description: 'Batman se enfrenta al Joker, un criminal que busca destruir Gotham City.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_FMjpg_UX1260_.jpg',
      reviews: []
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime',
      director: 'Quentin Tarantino',
      description: 'Las vidas de dos sicarios, un boxeador y la esposa de un gángster se entrelazan en cuatro historias de violencia y redención.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1055_.jpg',
      reviews: []
    }
  ];

  getAllMovies() {
    return [...this.movies];
  }

  getMovieById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  addReview(movieId: number, review: any) {
    const movie = this.getMovieById(movieId);
    if (movie) {
      if (!movie.reviews) {
        movie.reviews = [];
      }
      movie.reviews.push(review);
    }
  }
}