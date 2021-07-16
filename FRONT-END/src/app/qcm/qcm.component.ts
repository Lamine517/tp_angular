import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Qcm } from '../classes/qcm';
import { QcmService } from '../qcm.service';


@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.css']
})
export class QcmComponent implements OnInit {

  qcms : Qcm[]=[];
  qcm = [];
  constructor(
    private router : Router,
    private qcmService : QcmService,

  ) {}
   

  ngOnInit(): void {
    this.qcms = this.qcmService.qcms;
    this.qcmService.getQcmFromServer().subscribe(
      data => console.log(data),
      err => console.error(err)
    );
  }
  
  ouvrirFormQCM(){
    this.router.navigate(['qcm/add']);
  }
  editQCM(){
    this.router.navigate(['qcm/edit']);
  }

}
