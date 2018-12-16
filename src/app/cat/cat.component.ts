import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(
   private activatedRoute: ActivatedRoute,
   )
{

    console.log("routes");
    //console.log(activatedRoute.snapshot.url); // array of states
    console.log(activatedRoute.snapshot.url[1].path.toString); 
}

  ngOnInit() {

    console.log("routes");
    this.output();
  }

 output = () =>{

    let param = this.activatedRoute.snapshot.url[1].path.toString();
    
    console.log("param\n" + param); 

  return param;
 }

 get catName (){

   return this.output();

}
}
