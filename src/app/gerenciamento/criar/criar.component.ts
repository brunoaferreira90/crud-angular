import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      dataVisita: ['', Validators.required],
      idRepresentante: ['', Validators.required],
      nomeCliente: ['', Validators.required],
      enderecoCliente: ['', Validators.required],
      valorGastoDeslocamento: ['', Validators.required],
    });

  }

}
