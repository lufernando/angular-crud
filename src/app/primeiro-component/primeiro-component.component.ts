import { Component, OnInit } from '@angular/core';
import { Pessoa } from './model.pessoa';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent implements OnInit {

  public pessoas: Array<Pessoa>;
  public pessoa: Pessoa;

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();

  }

  public salvar(){
    this.pessoa.id = this.pessoas.length + 1;
    this.pessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
  }

  public excluir(idRemover: number){
    let posicao = this.pessoas.findIndex(pessoa => pessoa.id === idRemover);
    this.pessoas.splice(posicao, 1);
  }

}

