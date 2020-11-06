import { Component, OnInit } from '@angular/core';
import { FieldsEnum } from './fieldsEnum';
import { TextService } from './text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  initialname:string;
  name:string;
  isText:boolean;
  minInclusive:string;
  maxInclusive:string;
  id:string;
  isMandatory:boolean;
  textInput:string;
  field:FieldsEnum;
  value:string;
  constructor() {  }

  ngOnInit(): void {
    this.name = this.field.name;
    this.isText = (this.field.type == 'str');
    this.minInclusive = this.field.validation.minInclusive;
    this.maxInclusive = this.field.validation.maxInclusive;
    this.id = this.field.id;
    this.isMandatory = this.field.validation.mandatory;
    this.value = this.field.value;
  }
}
