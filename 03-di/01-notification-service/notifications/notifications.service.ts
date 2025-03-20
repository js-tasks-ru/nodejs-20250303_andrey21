import { Injectable, NotFoundException, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class NotificationsService {
  constructor(private configService: ConfigService) {}
  private readonly logger = new Logger(NotificationsService.name);

  async sendEmail(to: string, subject: string, message: string): Promise<void> {
    if (!to) {
      throw new NotFoundException('400 Bad Request');
    }
    const lang = this.configService.get<string>('LANG');
    let emailText: string;
    if (lang === 'en') {
     emailText = `Email sent to ${to}: [${subject}] ${message}`;
    } else {
      emailText = message;
    }
    this.logger.log(emailText);
    return console.log(emailText);
  }

  async sendSMS(to: string, message: string): Promise<void> {
    if (!to) {
      throw new NotFoundException('400 Bad Request');
    }
    const lang = this.configService.get<string>('LANG');
    let smsText: string;
    if (lang === 'en') {
      smsText = `SMS sent to ${to}: Статус задачи ${message} обновлён на "completed"`;
    } else {
      smsText = message;
    }
    this.logger.log(smsText);
    return console.log(smsText)
  }
}
