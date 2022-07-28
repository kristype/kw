import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../cv/cv';

@Component({
  selector: 'app-experience[experience]',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input()
  public experience!: Experience;

  constructor() {}

  ngOnInit(): void {}
}
