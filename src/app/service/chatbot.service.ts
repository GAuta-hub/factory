import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor() { }
  getResponse(query: string): string {
    // Convert the query to lowercase to make the rule checking case-insensitive
    const lowerCaseQuery = query.toLowerCase();

    // Define rules and corresponding responses

    if (lowerCaseQuery.includes('hello') || lowerCaseQuery.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseQuery.includes('price')) {
      return 'The price of the product is $50.';
    } else if (lowerCaseQuery.includes('shipping')) {
      return 'We offer free shipping on orders above $100.';
    } else if (lowerCaseQuery.includes('return policy')) {
      return 'You can return the product within 30 days of purchase.';
    } else {
      return 'I’m sorry, I didn’t understand that. Can you please rephrase your question?';
    }
  }
}
