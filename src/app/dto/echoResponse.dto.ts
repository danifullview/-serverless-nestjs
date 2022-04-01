import { EchoRequestDto } from './echoRequest.dto';

/**
 * Echo response model
 */
export class EchoResponseDto {
  /**
   * Initial request payload
   */
  request: EchoRequestDto;
  /**
   * Status of the request
   */
  success?: boolean;
  /**
   * Processing message
   */
  message?: string;
}
