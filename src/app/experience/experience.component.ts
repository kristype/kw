import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience[title][subTitle][description][from][to]',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input()
  public title!: string;

  @Input()
  public logo?: string;

  @Input()
  public subTitle!: string;

  @Input()
  public description!: string[];

  @Input()
  public from!: string;

  @Input()
  public to!: string;

  constructor() {}

  ngOnInit(): void {}
}
