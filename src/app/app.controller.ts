import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EchoRequestDto, EchoResponseDto } from './dto';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * The Echo POST method
   * @param req req param
   * @returns something
   */
  @Post('echo')
  postEcho(@Body() req: EchoRequestDto): EchoResponseDto {
    return this.appService.postEcho(req);
  }
}
