import { Component, OnInit } from '@angular/core';
import { ValidateTokenService } from '../../services/http/validate-token.service';
import { ValidateToken } from '../../../core/models/validate-token.model';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  constructor(private _validateTokenService: ValidateTokenService) { }

  ngOnInit(): void {

    let idProcess = 1;
    let channel = 'Web';
    let processType = 'ENR';
    let token = '1jak3zniq91i3';
    let identificationNumber = '1020806111';

    let data = new ValidateToken(idProcess, identificationNumber, channel, processType, token);
    
    this._validateTokenService.validateToken(data).subscribe(resp => {
      console.log('Validación del Token');
      console.log(resp);
    });
  }
}