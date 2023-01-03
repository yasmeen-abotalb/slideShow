import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  imgPass="./assets/images/1.jpg";
  arr: string[] =["./assets/images/1.jpg","./assets/images/2.jpg","./assets/images/3.jpg","./assets/images/4.jpg","./assets/images/5.jpg","./assets/images/6.jpg"];
  count =0;
  next(){
   if(this.count<this.arr.length-1){
     this.count++;
     this.imgPass = this.arr[this.count];
   }
  }
  prev(){
    if(this.count<=this.arr.length-1 && this.count!=0){
      this.count--;
        this.imgPass = this.arr[this.count];
    }
  }
 s:any;
  slide(){
     this.s= setInterval(()=>{
        this.count++;
        if(this.count>this.arr.length-1){
          this.count =0;
         }
        this.imgPass = this.arr[this.count];
    },1500)
  }
  stop(){
    clearInterval(this.s);
  }
}
