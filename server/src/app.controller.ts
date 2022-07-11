import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from 'composable/types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/all')
  getAllUsers(): IUser[] {
    return this.appService.getAllUsers();
  }

  @Post('/add')
  addUser(@Body() user: IUser): void {
    return this.appService.addUser(user);
  }
}
