import { Component, inject } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  private loggingService: LoggingService;
  private accountsService: AccountsService;

  constructor() {
    // this.loggingService = inject(LoggingService);
    this.accountsService = inject(AccountsService);
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChanged(accountStatus);
  }
}
