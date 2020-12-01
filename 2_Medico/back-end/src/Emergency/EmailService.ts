import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  public send(email: string, message: string): void {
    this.mailerService
      .sendMail({
        to: email, // list of receivers
        from: 'stepestr2020@gmail.com', // sender address
        subject: 'STEPES-TR - EMERGÊNCIA', // Subject line
        html: `
        <p align="center">
          <a href="https://github.com/stepestr/ipbl2020/tree/master/2_Medico" target="blank"><img src="https://user-images.githubusercontent.com/10083265/95672144-b83c3f00-0b74-11eb-94d2-30c1333bb411.png" width="150" alt="STEPES-TR Logo" /></a>
        </p>
        <p align="center">
          <b>${message}</b>
        </p>
        <p>Mensagem de socorro recebida</p>
        <p>Paciente: ${message}<b></b></p>
        `, // HTML body content
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        return error;
      });
  }
}
