import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../../services/services.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  stateProcess: string;

  private idTx: string;
  private entityId: number;
  private userStatus: string;

  constructor(private activatedRoute: ActivatedRoute, private _validateEntityService: EntityService) {
    this.getParameters();
    this.stateProcess = "loading";
  }

  ngOnInit() {
    this.validateEntity();
  }

  private validateEntity() {
    this._validateEntityService.getEntity(this.entityId).subscribe(resp => {
      console.log(resp);
    });
  }

  getParameters(){
    this.activatedRoute.params.subscribe(params => {
      this.idTx = params['idTx'];
      this.entityId = params['entityId'];
      this.userStatus = params['userStatus'];
    });
  }
}