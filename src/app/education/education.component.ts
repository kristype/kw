import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../cv/cv';

@Component({
  selector: 'app-education[education]',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  @Input()
  public education!: Education;

  constructor() {}

  ngOnInit(): void {}
}
