import { Type } from 'class-transformer';
import {
    IsArray,
    IsDate,
    IsDateString,
    IsOptional,
    IsString,
} from 'class-validator';

export class MenuRequestDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    id?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    name?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    category?: string[];

    @IsOptional()
    @IsArray()
    @Type(() => Date)
    @IsDate({ each: true })
    createdAt?: Date[];

    @IsOptional()
    @IsArray()
    @Type(() => Date)
    @IsDate({ each: true })
    updatedAt?: Date[];

    @IsOptional()
    @IsArray()
    @Type(() => Date)
    @IsDate({ each: true })
    deletedAt?: Date[];
}