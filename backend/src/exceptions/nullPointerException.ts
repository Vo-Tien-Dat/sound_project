import { HttpException, HttpStatus } from '@nestjs/common';

export class NullPointerException extends HttpException {
    constructor() {
        super('Forbidden', HttpStatus.FORBIDDEN);
    }
}
