import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup;
  switch: boolean = false

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buliderForm()
    this.rr()
  }
  buliderForm() {
    this.signInForm = this.builder.group({
      username: ['', [Validators.required, Validators.pattern('[A-za-z\\s]{3,}')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }
    )
  }

  hideAndShowPassword(status: string, visable: boolean) {
    const pInput = document.getElementById("passwoed-input");
    pInput?.setAttribute("type", status);
    this.switch = visable;
  }
  signIn() {
    console.log(this.signInForm.value);
    this.signInForm.reset()
  }


  rr() {
    const select = document.querySelectorAll('.selectBtn');
    const option = document.querySelectorAll('.option');
    let index = 1;
    console.log(select);
    console.log(option);


    select.forEach(a => {
      a.addEventListener('click', b => {
        const element_target = b.target as HTMLTextAreaElement
        const next = element_target?.nextElementSibling;
        console.log(next);

        next?.classList.toggle('toggle');
        const nextHtml = next as HTMLElement
        nextHtml?.setAttribute("style", `zIndex:${index++};`);
        // style.zIndex = index++;
      })
    })
    option.forEach(a => {
      a.addEventListener('click', b => {
        const targetElement = b.target as HTMLElement
        targetElement?.parentElement?.classList.remove('toggle');
        const parent = targetElement?.closest('.select')?.children[0] as HTMLElement;
        parent.setAttribute('data-type', targetElement?.getAttribute('data-type') as string);
        parent.innerText = targetElement?.innerText;
      })
    })


  }


}
