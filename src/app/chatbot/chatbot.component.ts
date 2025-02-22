import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatbotService } from '../service/chatbot.service';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule,FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {


  constructor(private chatBotService:ChatbotService){}
  userInput: string = '';
  response: { sender: any, text: any }[] = [];

  async sendMessage() {
    if (this.userInput.trim()) {
      // Add user's message to the response array
      this.response.push({ sender: 'user', text: this.userInput });
  
      // Get the bot's response
      const botResponse = await this.chatBotService.getResponse(this.userInput);
  
      // Add bot's response to the response array
      this.response.push({ sender: 'bot', text: botResponse });
  
      // Clear the input field
      this.userInput = '';
    }
  }


 

  }

  
