// movie-detail.component.ts modificado
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent, AddReviewComponent],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  movieId: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      this.movie = this.movieService.getMovieById(this.movieId);
    });
  }
  
  addReview(review: any) {
    this.movieService.addReview(this.movieId, review);
  }
}