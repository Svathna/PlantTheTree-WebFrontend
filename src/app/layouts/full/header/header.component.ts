import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(
    public authService: AuthService,
  ) {}

  signOut() {
    this.authService.SignOut();
  }
}
