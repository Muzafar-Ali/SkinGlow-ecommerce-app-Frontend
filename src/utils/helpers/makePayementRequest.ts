import config from '@/config/config';
import { v4 as uuidv4 } from 'uuid';

export const makePaymentRequest = async (endpoint: string, payload: any) => {
    // Generating a UUID for the order
    const decimalUUID = uuidv4().replace(/-/g, ''); // Remove hyphens
    const numericValue = BigInt(`0x${decimalUUID}`).toString(); // Convert hexadecimal to decimal
    
    const currentDate = new Date().toISOString();
  
    // Adding orderId and date to the payload
    const updatedPayload = {
      ...payload,
      orderId: numericValue,
      date: currentDate,
    };
  
    const response = await fetch(`${config.baseUri}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPayload),
    });
  
    const data = await response.json();
    return data;
  };
  