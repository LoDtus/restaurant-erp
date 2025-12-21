import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationRequestDto } from './pagination-request.dto';

export class QueryRequestDto<T> {
    @IsOptional()
    @ValidateNested()
    @Type(() => PaginationRequestDto)
    pagination?: PaginationRequestDto;

    @IsOptional()
    filter?: T; // Cần sửa lại, không cung cấp T
}
