import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})



export class ExperienceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $(document).ready( () => {
      $('#E2opentrigger').click(() => {
        const companyName = document.getElementById('E2opentrigger').getAttribute('name');
        $('#ModalTitle').text(companyName);
        $('#UNTData').hide();
        $('#TechMData').show();
        $('#Modalexp').modal('toggle');
      });
      $('#UMKCtrigger').click(() => {
        const companyName = document.getElementById('UMKCtrigger').getAttribute('name');
        $('#ModalTitle').text('UNT Data Science');
        $('#TechMData').hide();
        $('#UNTData').show();
        $('#Modalexp').modal('toggle');
      });
    });
  }
}
