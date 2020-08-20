import { PromModule } from '@digikare/nestjs-prom';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SES } from 'aws-sdk';
import nodemailer from 'nodemailer';
import { AppController } from './app.controller';
import { gqlOptions } from './graphql/gql-options';
import { AuthModule } from './modules/auth/auth.module';
import { MediaModule } from './modules/media/media.module';
import { UsersModule } from './modules/users/users.module';
import { typeORMConfig } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    MediaModule.forRoot({
      uploadDir: 'uploads',
      quality: 70,
    }),
    PromModule.forRoot({
      defaultLabels: {
        app: 'my_app',
      },
      // customUrl:'/'
    }),
    GraphQLModule.forRoot(gqlOptions),
    AuthModule.forRoot({
      secret: 'Golf Salon secret',
    }),
    MailerModule.forRoot({
      transport: nodemailer.createTransport({
        SES: new SES({
          apiVersion: '2010-12-01',
        }),
      }),
      defaults: {
        from: '"Harry Duong" <noreply@golfsalon.com>',
      },
      template: {
        dir: __dirname + '/email-templates',
        // adapter: new HandlerBa(),
        options: {
          strict: true,
        },
      },
    }),
    UsersModule,
  ],
  // providers: [JSONObjectScalar],
  controllers: [AppController],
})
export class AppModule {}
