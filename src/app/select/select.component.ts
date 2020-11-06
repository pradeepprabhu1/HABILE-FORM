import { Component, OnInit } from '@angular/core';
import { FieldsEnum } from '../text/fieldsEnum';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  name:string;
  id:string;
  field:FieldsEnum;
  values:string[];
  isMandatory:boolean;
  constructor() { }

  ngOnInit(): void {
    this.name = this.field.name;
    this.values = this.field.values;
    this.isMandatory = this.field.validation.mandatory;
    this.id = this.field.id;
  }

}
