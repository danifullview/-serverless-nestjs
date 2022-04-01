import { Injectable } from '@nestjs/common';
import { EchoRequestDto, EchoResponseDto } from './dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postEcho(req: EchoRequestDto): EchoResponseDto {
    return {
      request: req,
      message: 'Echo response message',
      success: false,
    };
  }
}
