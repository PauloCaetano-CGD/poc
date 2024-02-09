import { Component, ViewEncapsulation, OnInit, Input, SimpleChanges } from '@angular/core';
import { SampleService } from '../service/sample.service';
import { Example } from '../example';

@Component({
  selector: 'app-cgd',
  templateUrl: './cgd.component.html',
  styleUrls: ['./cgd.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CgdComponent implements OnInit{
  isTextHidden = false;
  example: Example;
  clientContent: any;

  @Input() submitSession: string;

  constructor(private service: SampleService){}

  ngOnInit() {
    this.fetchExamples();
    }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.fetchClientInfo();
  }
  
  fetchExamples() {
    return this.service.getExamples().subscribe(response => 
      this.example = response
    );
  }

  fetchClientInfo(){
    return this.service.getClientInfo(this.submitSession).subscribe(response => 
      this.clientContent = response
    );
  }

}