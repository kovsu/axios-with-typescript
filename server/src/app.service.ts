import { Injectable } from '@nestjs/common';
import { data } from 'composable/data';
import { IUser } from 'composable/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllUsers(): IUser[] {
    return data;
  }

  addUser(user: IUser): void {
    data.push(user);
  }
}
