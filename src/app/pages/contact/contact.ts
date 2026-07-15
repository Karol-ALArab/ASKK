import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FadeInDirective } from '../../directives/fade-in';
import { MatDivider } from '@angular/material/list';

interface CommissionRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  project: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, FadeInDirective, MatDivider],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // TODO: ASK JOSH TO SIGN UP FOR FORMSPRFEE
  private readonly formspreeEndpoint = 'https://formspree.io/f/xqeranne';

  request: CommissionRequest = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    project: '',
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  async onSubmit(form: NgForm): Promise<void> {
    if (form.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    const fd = new FormData();
    fd.append('name', this.request.name);
    fd.append('email', this.request.email);
    fd.append('phone', this.request.phone);
    fd.append('projectType', this.request.projectType);
    fd.append('budget', this.request.budget);
    fd.append('project', this.request.project);

    try {
      const res = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });

      if (res.ok) {
        this.submitSuccess = true;
        form.resetForm();
      } else {
        this.submitError = 'Something went wrong. Please try again.';
      }
    } catch {
      this.submitError = 'Something went wrong. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
