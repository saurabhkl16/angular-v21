import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      console.log(param);
    });
  }
}
