import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QcmService } from 'src/app/qcm.service';

@Component({
  selector: 'app-add-qcm',
  templateUrl: './add-qcm.component.html',
  styleUrls: ['./add-qcm.component.css']
})
export class AddQcmComponent implements OnInit {

  constructor(
    private router: Router,
    private qcmService: QcmService
  ) { }

  ngOnInit(): void {
  }
  returnQCM(){
    this.router.navigate(['qcm']);
  }
  addNewQCM(monForm: NgForm){
    console.log(monForm.value);  
    this.qcmService.ajout(
      monForm.value.id,
      monForm.value.question,
      monForm.value.reponse,
      monForm.value.note,
    );
  }

}
