import { IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationRequestDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    page: number = 0;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    size: number = 20;

    @IsOptional()
    @IsString()
    sortBy: string = 'id';

    @IsOptional()
    @IsString()
    sortDirection: 'asc' | 'desc' = 'asc';
}
