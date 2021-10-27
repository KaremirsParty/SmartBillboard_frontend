import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Dto } from './dto';
import { EthService } from './eth-service';

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.css']
})
export class MetamaskComponent implements OnInit {

  a = new FormControl();
  b = new FormControl();
  c = new FormControl();
  dtoForm: FormGroup = this.builder.group({
    a: this.a,
    b: this.b,
    c: this.c
  });

  constructor(
    private builder: FormBuilder,
    private ethService: EthService) { 

    }

  ngOnInit(): void {
  }

  onSubmitDto(): void {
    let dto = this.getConfigureFromFormControl();
    console.log(dto);
  }

  private getConfigureFromFormControl(): Dto {
    let dto: any = new Object();
    dto.a = this.dtoForm.controls['a'].value;
    dto.b = this.dtoForm.controls['b'].value;
    dto.c = this.dtoForm.controls['c'].value;
    return dto;
  }
  //https://medium.com/upstate-interactive/how-to-connect-an-angular-application-to-a-smart-contract-using-web3js-f83689fb6909
  // Polecam: https://web3js.readthedocs.io/en/v1.5.2/ :)
  First(): void {
    console.log("First");
    // if (typeof window.ethereum !== 'undefined') {
    //   console.log('MetaMask is installed!');
    // }
  }

  Second(): void {
    console.log("Second");
  }
}
