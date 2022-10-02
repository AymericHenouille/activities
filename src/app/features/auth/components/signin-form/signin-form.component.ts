import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  protected form!: FormGroup;
  protected showPassword: boolean = false;
  protected loading: boolean = false;
  protected rememberMe: boolean = false;

  protected errorMessage!: string;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public async signin(): Promise<void> {
    if (this.form.valid) {
      this.loading = true;
      try {
        const email: string = this.email;
        const password: string = this.password;
        await this.userService.rememberMe(this.rememberMe);
        await this.userService.signin(email, password);
        await this.router.navigate(['/activities']);
      }
      catch (error) {
        console.error(error);
        this.errorMessage = JSON.stringify(error);
      }
      finally { this.loading = false; }
    }
  }

  protected get visibility(): string {
    return this.showPassword ? 'visibility_off' : 'visibility';
  }

  private get email(): string {
    return this.form.get('email')?.value;
  }

  private get password(): string {
    return this.form.get('password')?.value;
  }

}
