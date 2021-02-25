import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() Name: string; Description: string; 
  arraytask: Task[];
  task
  check
  a: number;
  
  constructor() {
  
    this.arraytask = [{name:'Breakfast',description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus.'},{name:'Coffee',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, accusamus.'}]
    //this.task = {}
    //this.arraytask.push(this.task)
    this.a=1
    this.check=[]
    this.clear();
  }
  Addtask() {
      this.task = {}
      this.task['name'] = this.Name
      this.task['description'] = this.Description
     // console.log(this.Name)
      //console.log(this.Name.length)
      if (this.Name !== '' && this.Name.toLowerCase() !== this.Name.toUpperCase()){

        this.arraytask.push(this.task)
      }
  }

  clear() {
    this.Name = '';
    this.Description = '';
  }
  deletetask(x){
      this.arraytask = this.arraytask.filter(item => item.name!== x.name); 
  }
  select(x){
    this.check = []
    this.check.push(x)
    this.a=2
  }
  ngOnInit(): void {
  }
}

