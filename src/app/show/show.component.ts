import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { ContactEnum } from '../text/contactEnum';
import { FieldsEnum } from '../text/fieldsEnum';
import { TextComponent } from '../text/text.component';
import { TextService } from '../text/text.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public contactUs:ContactEnum;
  componentRef: any;
  @ViewChild('dynamicLoadComponent', {read:ViewContainerRef})entry:ViewContainerRef;
  constructor(private service:TextService,private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.service.showSavedForm()
    .subscribe(data => {
      this.contactUs = data;
      console.log(this.contactUs);
      var formDiv: any = document.getElementsByClassName('container-fluid');
      formDiv[0].style.display = "none"
      var buttonDiv: any = document.getElementsByClassName('showform');
      buttonDiv[0].style.display = "none"
      this.entry.clear();
      var fields:FieldsEnum[] = this.contactUs.fields;
      for(let fieldValue = 0;fieldValue<this.contactUs.fields.length;fieldValue++){
        var field:FieldsEnum = fields[fieldValue];
        const factory = this.resolver.resolveComponentFactory(TextComponent);
        this.componentRef = this.entry.createComponent(factory);
        this.componentRef.instance.field = field;
      }


    }
    );
  }


}
