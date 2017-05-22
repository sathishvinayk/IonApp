import { Component } from '@angular/core';
import { NavController,ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
  tasks: Array<any>=[];
  constructor(public navCtrl: NavController) {
    this.tasks=[
      {title: 'Milk', status:'Open'},
      {title: 'Eggs', status:'Open'},
      {title: 'Syrup', status:'Open'},
      {title: 'Pancake Mix', status:'Open'}
    ];
  }
  //Adding new item
  addItem(){
    let theNewTask: string = prompt("New Task");
    if(theNewTask!==""){
      this.tasks.push({title: theNewTask, status:"open"})
    }
  }
  //Marking as Done when clicked on right to left swipe
  markAsDone(slidingItem: ItemSliding,task: any){
    task.status="done";
    slidingItem.close();
  }
  //Removing the item when tappng on remove 
  removeTask(slidingItem: ItemSliding,task:any){
    task.status="removed";
    let index=this.tasks.indexOf(task);
    if(index>-1){
      this.tasks.splice(index,1);
    }
    slidingItem.close();
  }
}
