import { Component, OnInit } from '@angular/core';

import { ProgramService } from '../../services/program.service';
import { Program } from '../../models/program.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  programs: Program[];
    
  constructor(
    private programService: ProgramService
  ) { }

  ngOnInit(): void {
    this.programService.getPrograms()
    .subscribe(res => {
      this.programs = res;
    });

    this.programService.getAPIResponse('', '');
  }

}
