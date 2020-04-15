import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email: string;
  FullName: string;
  Education: string;
  Job: string;
  constructor() { }
  ngOnInit(): void {
    this.email = 'divya.velugula@gmail.com';
    this.FullName = 'Divya Sree Velugula';
    this.Education = 'MS in Data Science';
    this.Job = 'Data Engineer, Big Data Developer, Data Analyst';
  }
}
