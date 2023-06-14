import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



export class Demo{
  constructor(public key:string, public value:string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
   conversation = new Subject<Demo[]>();
   chatMessage= new Subject();
   value:string|undefined;

   
   messageMap:any={
     "hi":"Welcome to ChatGPT. How can we help you?",
     "What is Angular":"Angular is client side framework",
     "Default":"I cant understand . Can you please repeat otherwise contact HR"
   }


   getBotAnswer(msg:any){
    const userMessage = new Demo('user',msg);
    this.conversation.next([userMessage]);
    const botMessage = new Demo('bot', this.getBotMessage(msg));
    setTimeout(()=>{
        this.conversation.next([botMessage]);
    },1500);
   }

   getBotMessage(question:string){
     let answer = this.messageMap[question];
     console.log(answer, 'this is answer');
     return answer;
   }

 

   getChataAnswer(botAnswer:string){
     console.log(botAnswer, 'this is the answwer');
     this.chatMessage.next(botAnswer+ 'this is the botAnswer');

   }
}
