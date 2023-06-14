

import { Component, OnInit } from '@angular/core';
import { Demo, ChatService } from '../chat.service';
import data from '../../assets/data.json';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: Demo[] = [];
  value: string | undefined;
  myData: any = data;
  displayResult: any = [];
  getValue: any;
  finalResult:any=[];

  c: any = [1, 4, 5, 8];

  getData: any

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    this.chat.conversation.subscribe(a => {
      console.log(a, 'this is messsage');
      this.message = this.message.concat(a);
      // console.log(this.message);
    });

    this.c.forEach((res:any)=>{
      console.log(res, 'this is the response using forEach');
    });

    this.displayResult.push(this.myData);

    this.chat.chatMessage.subscribe(b=>{
      this.displayResult.map((res: any) => {
        console.log(res.data, 'this is response');
        this.getValue = res.data;

        this.getValue.some((a:any)=>{
          alert("hello");
          alert(a.id+ "this is the id");
          console.log(this.finalResult, 'this is final result');
          if((a.id==this.getData)){
            alert("hello2");
              this.finalResult.push(a.data);
              console.log(this.finalResult, 'this is the data');
            }
        });
    });

  });
}

  

  sendMessage() {
    this.chat.getBotAnswer(this.value);
    this.value = '';
  }


  sendData() {
    console.log(this.getData);
    console.log(data, 'this is data');
    this.chat.getChataAnswer(this.getData);

    // this.displayResult.push(this.myData);
    // console.log(typeof (this.displayResult));
    // console.log(this.displayResult, 'this is result');
    // this.displayResult.map((res: any) => {
    //   console.log(res.data, 'this is response');
    //   this.getValue = res.data;
    //   // this.getValue.every(CheckResult);
    //   this.getValue.some((a:any)=>{
    //     if(a.id==this.getData){
    //       this.finalResult.push(a.data);
    //       console.log(this.finalResult, 'this is the data');
         
    //     }
    //   });
    // });
  }

}

