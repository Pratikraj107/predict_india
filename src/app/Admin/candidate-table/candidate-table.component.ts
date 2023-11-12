import { Component } from '@angular/core';
import {Firestore,collection,addDoc,collectionData,doc,getDoc, updateDoc, deleteDoc} from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent {

  displayedColumns: string[] = ['candidateName', 'candidateDetails','candidatePicture','action'];
  dataSource: any[] = [ ];
  pollId : any;
  constructor(private firestore: Firestore, private router: Router){
    this.getCandidate();
    this.pollId = sessionStorage.getItem('pollId');
  }

  onButtonClick(element: any) {
    console.log('Button clicked for:', element);
    const id = element.id;
    sessionStorage.setItem("pollId", id);
    this.router.navigate(['/admin/candidate-form']);
  }

  getCandidate(){
    const collectionInstanse = collection(this.firestore,'candidate');

    collectionData(collectionInstanse,{idField:'id'}).subscribe((res)=>{
      let k = res;
      this.dataSource = res.filter((item)=> item['pollId'] == this.pollId );
      console.log(this.dataSource);
    })
   }

}
