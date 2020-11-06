import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { ContactEnum } from './text/contactEnum';
import { FieldsEnum } from './text/fieldsEnum';
import { TextComponent } from './text/text.component';
import { TextService } from './text/text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Habile-Form';
  public contactUs:ContactEnum;
  componentRef: any;
  @ViewChild('dynamicLoadComponent', {read:ViewContainerRef})entry:ViewContainerRef;
  textInput:string;
  numberInput:string;
  newObject:any;
  
  constructor(private service: TextService, private resolver: ComponentFactoryResolver,
    private router:Router) {  }
    
    ngOnInit(): void {
      this.service.getJsonData()
      .subscribe(data => {
        this.contactUs = data;
        console.log(this.contactUs);
        this.entry.clear();
        var fields:FieldsEnum[] = this.contactUs.fields;
        for(let fieldValue = 0;fieldValue<this.contactUs.fields.length;fieldValue++){
          var field:FieldsEnum = fields[fieldValue];
          let factory;
          if('list' == (field.type)){
            factory = this.resolver.resolveComponentFactory(SelectComponent);
          }else{
            factory = this.resolver.resolveComponentFactory(TextComponent);
          }
          this.componentRef = this.entry.createComponent(factory);
          this.componentRef.instance.field = field;
          if('list' !== (field.type) && fieldValue == 0){
            this.componentRef.instance.initialname = this.contactUs.name;
          }
        }
        
        
      }
      );
    }
    
    goToShowForms() :void{
      this.router.navigate(['showForm']);
    }
    
    onSubmit() {
      alert("Form Subitted successfully");
       const userForm: HTMLFormElement = document.querySelector("#userForm");
       const formData:any = new FormData(userForm);
       var data:string[] = [];
      for(var pair of formData.entries()){data.push(pair[0]+ ',' +pair[1])}
      alert(data);
      location.reload();
    }

}
