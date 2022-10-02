import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { passwordsMatch } from '../../validators/password-match.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  protected form!: FormGroup;
  protected showPassword: boolean = false;
  protected showConfirmPassword: boolean = false;
  protected loading: boolean = false;

  protected errorMessage!: string;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { validators: passwordsMatch('password', 'confirmPassword') });
  }

  public async signup(): Promise<void> {
    if (this.form.valid) {
      this.loading = true;
      try {
        const email: string = this.email;
        const password: string = this.password;
        await this.userService.signup(email, password);
        await this.router.navigate(['/activities']);
      }
      catch (error) {
        console.error(error);
        this.errorMessage = JSON.stringify(error);
      }
      finally { this.loading = false; }
    }
  }

  protected visibility(show: boolean): string {
    return show ? 'visibility_off' : 'visibility';
  }

  private get email(): string {
    return this.form.get('email')?.value;
  }

  private get password(): string {
    return this.form.get('password')?.value;
  }

}
