import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready( () => {
    $('#project1').click(() => {
      $('#ModalTitle2').text('Twitter Data Analysis');
      $('#twitterData').show();
      $('#ShuttleData').hide();
      $('#ASEData').hide();
      $('#Unity').hide();
      $('#other').hide();
      $('#ModalExp').modal('toggle');
    });


    });
  }

}
