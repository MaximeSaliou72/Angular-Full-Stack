import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { WilderService } from '../services/wilder.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Wilder } from '../shared/models/wilder.model';

@Component({
  selector: 'app-wilders',
  templateUrl: './wilder.component.html',
  styleUrls: ['./wilder.component.css'],
})
export class WilderComponent implements OnInit {

  wilder = new Wilder();
  wilders: Wilder[] = [];
  teams: Wilder[][];
  isLoading = true;
  isEditing = false;

  addWilderForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  states = new FormControl('', Validators.required);
  resume = new FormControl('', Validators.required);

  constructor(private wilderService: WilderService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getWilders();
    this.addWilderForm = this.formBuilder.group({
      name: this.name,
      groupName: this.age,
      states: this.states,
      resume: this.resume,
    });
  }

  getWilders() {
    this.wilderService.getWilders().subscribe(
      (data) => {
        this.wilders = data;
        this.createTeams();
      },
      error => console.log(error),
      () => this.isLoading = false,
    );
  }

  createTeams() {
    const obj = {};

    for (const wilder of this.wilders) {
      if (!obj[wilder.groupName]) {
        obj[wilder.groupName] = [];
      }
      obj[wilder.groupName].push(wilder);
    }
    this.teams = Object.values(obj);
    console.log(this.teams);
  }

  addWilder() {
    this.wilderService.addWilder(this.addWilderForm.value).subscribe(
      (res) => {
        this.wilders.push(res);
        this.addWilderForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  enableEditing(wilder: Wilder) {
    this.isEditing = true;
    this.wilder = wilder;
  }

  cancelEditing() {
    this.isEditing = false;
    this.wilder = new Wilder();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the wilders to reset the editing
    this.getWilders();
  }

  editwilder(wilder: Wilder) {
    this.wilderService.editWilder(wilder).subscribe(
      () => {
        this.isEditing = false;
        this.wilder = wilder;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error),
    );
  }

  deleteWilder(wilder: Wilder) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.wilderService.deleteWilder(wilder).subscribe(
        () => {
          const pos = this.wilders.map(elem => elem._id).indexOf(wilder._id);
          this.wilders.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error),
      );
    }
  }

}
