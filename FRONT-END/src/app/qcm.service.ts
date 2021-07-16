import { Injectable } from '@angular/core';
import { Qcm } from './classes/qcm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QcmService {

  data = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  qcms = [
    new Qcm(0, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
    new Qcm(1, 'capitale du senegal ?', 'dakar', 10),
    new Qcm(2, 'quelle est la devise du senegal?', 'un peuple un but', 10),
    new Qcm(3, 'qui est l\'actuel president du senegal ?', 'macky sall', 10),
  ];
  ajout(id: number,
    question: string,
    reponse: string,
    note: number
){
this.qcms.push(new Qcm(id, question, reponse, note));
}

add(
  question: string,
    reponse: string,
    note: number
){
  this.httpClient.post("http://localhost/DEV%20WEB%20DESIGN/angular/projet/TestAngular/BACK-END/src/index.php",
  new Qcm(' ',question,reponse,note));
}
getQcmFromServer(){
  return this.httpClient.get("https://localhost/DEV%20WEB%20DESIGN/angular/projet/TestAngular/BACK-END/src/donnees.php")
}


}
