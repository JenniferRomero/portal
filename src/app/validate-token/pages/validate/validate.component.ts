import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ValidateToken } from '../../../core/models/validate-token.model';
import { ValidateTokenService } from '../../services/http/validate-token.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  stateProcess: string;

  private token: string;
  private idNumber: string;
  private idProcess: number;

  constructor(private activatedRoute: ActivatedRoute, private _validateTokenService: ValidateTokenService) {
    this.getParameters();
    this.stateProcess = "loading";
  }

  ngOnInit(): void {

    let channel = 'App WEB';
    let processType = 'ENR';

    let data = new ValidateToken(this.idProcess, this.idNumber, channel, processType, this.token);
    
    this._validateTokenService.validateToken(data).subscribe(resp => {
      console.log(resp);
      if(resp['code'] == 'F084'){
        this.stateProcess = "success";
      } else {
        this.stateProcess = "error";
      }
    });
  }

  getParameters(){
    this.activatedRoute.params.subscribe(params => {
      this.token = params['token'];
      this.idProcess = params['idProcess'];
      this.idNumber = params['identificationNumber'];
    });
  }
}