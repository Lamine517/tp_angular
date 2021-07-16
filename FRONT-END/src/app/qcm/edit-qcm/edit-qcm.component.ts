import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-qcm',
  templateUrl: './edit-qcm.component.html',
  styleUrls: ['./edit-qcm.component.css']
})
export class EditQcmComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  returnQCM(){
    this.router.navigate(['qcm']);
  }

}
