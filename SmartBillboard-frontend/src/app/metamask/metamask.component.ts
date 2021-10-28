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
  public status: string = "";
  public account: string = "";
  public balance: string = "0";

  a = new FormControl();
  b = new FormControl();
  c = new FormControl();
  dtoForm: FormGroup = this.builder.group({
    a: this.a,
    b: this.b,
    c: this.c
  });

  constructor(private builder: FormBuilder, private ethService: EthService) {
    this.UpdateMetamaskStatus();
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

  async Connect(): Promise<void> {
    if (this.ethService.isConnected) {
      return;
    }
    await this.ethService.connectAccount();

    await this.UpdateMetamaskStatus();
  }

  private async UpdateMetamaskStatus() {
    if (this.ethService.isConnected) {
      this.status = "connected";
    } else {
      this.status = "not initialized";
    }

    this.account = this.ethService.account;
    this.balance = await this.ethService.getBalance();
  }
}
