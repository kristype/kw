import { Component, OnInit } from '@angular/core';
import { CV } from './cv.js';

import cvData from './cv.json';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvData = cvData as CV;

  constructor() {}

  ngOnInit(): void {}
}
