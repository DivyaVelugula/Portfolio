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
      $('#walmartSalesData').hide();
      $('#ModalExp').modal('toggle');
    });

      $('#project2').click(() => {
        $('#ModalTitle2').text('Walmart Sales');
        $('#twitterData').hide();
        $('#walmartSalesData').show();
        $('#ModalExp').modal('toggle');

      });
    });
  }

}
