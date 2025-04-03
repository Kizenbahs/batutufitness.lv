declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface SendOptions {
    serviceId: string;
    templateId: string;
    userId?: string;
    accessToken?: string;
    templateParams?: Record<string, any>;
  }

  export function init(publicKey: string): void;
  
  export function send(
    serviceId: string,
    templateId: string,
    templateParams: Record<string, any>,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;
} 