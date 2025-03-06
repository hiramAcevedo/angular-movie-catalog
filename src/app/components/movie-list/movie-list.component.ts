// movie-list.component.ts modificado
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, HeaderComponent, FooterComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  selectedGenre: string = 'All';
  genres = ['All', 'Action', 'Crime', 'Drama', 'Sci-Fi'];
  
  constructor(private router: Router, private movieService: MovieService) { }
  
  ngOnInit() {
    this.movies = this.movieService.getAllMovies();
    this.filteredMovies = [...this.movies];
  }
  
  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    if (genre === 'All') {
      this.filteredMovies = [...this.movies];
    } else {
      this.filteredMovies = this.movies.filter(movie => movie.genre === genre);
    }
  }
  
  viewMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}