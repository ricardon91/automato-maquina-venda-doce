import { Component, OnInit } from '@angular/core';
import { DoceService } from '../services/doce.service';

@Component({
  selector: 'app-doces',
  templateUrl: './doces.component.html',
  styleUrls: ['./doces.component.scss'],
})
export class DocesComponent implements OnInit {
  doces: any = [];

  constructor(private doceService: DoceService) {}

  ngOnInit() {
    this.getDoces();
  }

  getDoces() {
    return this.doceService.getDoces().subscribe((data: {}) => {
      this.doces = data;
    });
  }
}
