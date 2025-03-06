// add-review.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  @Output() reviewAdded = new EventEmitter<any>();
  
  review = {
    user: '',
    rating: 5,
    comment: ''
  };
  
  onSubmit() {
    this.reviewAdded.emit({...this.review});
    // Resetear formulario
    this.review = {
      user: '',
      rating: 5,
      comment: ''
    };
  }
}