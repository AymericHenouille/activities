import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html',
  styleUrls: ['./forget-password-form.component.scss']
})
export class ForgetPasswordFormComponent implements OnInit {

  protected form!: FormGroup;
  protected showPassword: boolean = false;
  protected loading: boolean = false;
  protected rememberMe: boolean = false;

  protected errorMessage!: string;

  constructor(
    private readonly userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public async submit(): Promise<void> {
    if (this.form.valid) {
      this.loader(true);
      try {
        const email: string = this.email;
        await this.userService.requestPasswordReset(email);
      }
      catch (error) { console.error(this.errorMessage = JSON.stringify(error)); }
      finally { this.loader(false); }
    }
  }

  private loader(loading: boolean): void {
    (this.loading = loading)
      ? this.form.disable()
      : this.form.enable();
  }

  private get email(): string {
    return this.form.get('email')?.value;
  }

}
