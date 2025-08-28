import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Para habilitar o formulário reativo e o http client, adicione
// ReactiveFormsModule e HttpClientModule nos 'imports' do seu componente.
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule, // Habilita o [formGroup]
    HttpClientModule   // Habilita o HttpClient
  ],
  templateUrl: './contato.html',
  styleUrls: ['./contato.scss']
})
export class Contato implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: [''], // Opcional, sem validador
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      // !! IMPORTANTE: Substitua pela URL do SEU formulário do Formspree !!
      const formspreeEndpoint = 'https://formspree.io/f/xxxxxxxx';

      this.http.post(formspreeEndpoint, formData).subscribe({
        next: (response) => {
          alert('Mensagem enviada com sucesso!');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Erro ao enviar a mensagem:', error);
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}