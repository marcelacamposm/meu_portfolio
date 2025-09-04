import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contato.html',
  styleUrls: ['./contato.scss']
})
export class Contato implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(
        "x9fNFFE8zwotmM6BX",
        "template_0ztvo2r",
        this.contactForm.value,
      { publicKey: "x9fNFFE8zwotmM6BX" }
    )
    .then(
        () => {},
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}