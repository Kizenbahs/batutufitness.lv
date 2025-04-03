import { EventEmitter } from 'events';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';
import * as fs from 'fs';
import * as path from 'path';

export class SMTPMonitor extends EventEmitter {
  private transporter: Transporter | null = null;
  private checkInterval: NodeJS.Timeout | null = null;
  private lastChecked: Date | null = null;
  private isConnected: boolean = false;
  private reconnectAttempts: number = 0;
  private readonly maxReconnectAttempts: number = 5;
  private readonly reconnectDelay: number = 5000; // 5 seconds
  private readonly logFile: string;

  constructor() {
    super();
    this.logFile = path.join(__dirname, '../logs/smtp.log');
    this.initializeTransporter();
  }

  private log(message: string) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
  }

  private async initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await this.verifyConnection();
      this.startMonitoring();
    } catch (error) {
      this.log(`Failed to initialize SMTP transporter: ${error}`);
      this.isConnected = false;
      this.emit('error', error);
    }
  }

  private async verifyConnection(): Promise<boolean> {
    try {
      if (!this.transporter) {
        throw new Error('Transporter not initialized');
      }
      await this.transporter.verify();
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.lastChecked = new Date();
      this.log('SMTP connection verified successfully');
      this.emit('connected');
      return true;
    } catch (error) {
      this.isConnected = false;
      this.log(`SMTP verification failed: ${error}`);
      this.emit('disconnected', error);
      return false;
    }
  }

  private startMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }

    this.checkInterval = setInterval(async () => {
      await this.verifyConnection();
      if (!this.isConnected && this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        this.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        await this.initializeTransporter();
      }
    }, 60000); // Check every minute
  }

  public async sendEmail(options: nodemailer.SendMailOptions, retries = 3): Promise<boolean> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        if (!this.transporter || !this.isConnected) {
          throw new Error('SMTP transporter not ready');
        }

        await this.transporter.sendMail(options);
        this.log(`Email sent successfully to ${options.to}`);
        return true;
      } catch (error) {
        this.log(`Failed to send email (attempt ${attempt}/${retries}): ${error}`);
        if (attempt === retries) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, this.reconnectDelay));
      }
    }
    return false;
  }

  public getStatus() {
    return {
      isConnected: this.isConnected,
      lastChecked: this.lastChecked,
      reconnectAttempts: this.reconnectAttempts,
    };
  }

  public cleanup() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
    if (this.transporter) {
      this.transporter.close();
    }
  }
} 