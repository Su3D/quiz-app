import { Component, Input } from '@angular/core';
import { Question, Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() questions: Question;
  @Input() answers: Answers;
}

// src/results/results.component.ts ???