import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {

  compteur: number = 0;

  constructor() { }
  ngOnInit() { this.comptage(); }

  comptage() {
    this.compteur += 1;
    console.log(this.compteur);
  }
}
