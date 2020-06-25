import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-id-c-vt-state',
  templateUrl: './id-c-vt-state.component.html',
  styleUrls: ['./id-c-vt-state.component.scss']
})
export class IdCVtStateComponent implements OnInit {

  @Input() state: string;

  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes["state"];
    this.setState(change.currentValue);
  }

  setState(state: string){

    this.isError = false;
    this.isSuccess = false;
    this.isLoading = false;

    switch(state) { 
      case 'loading': { 
         this.isLoading = true;
         break; 
      } 
      case 'success': { 
         this.isSuccess = true;
         break; 
      } 
      default: { 
         this.isError = true;
         break; 
      } 
   } 
  };
}