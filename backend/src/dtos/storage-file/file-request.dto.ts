import { Type } from 'class-transformer';
import {
    IsArray,
    IsDate,
    IsDateString,
    IsNumber,
    IsOptional,
    IsString,
} from 'class-validator';

export class FileRequestDto {
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
    path?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    mimeType?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    uploadedBy?: string[];

    @IsOptional()
    @IsArray()
    @Type(() => Number)
    @IsNumber({}, { each: true })
    size?: number[];

    @IsOptional()
    @IsArray()
    @Type(() => Number)
    @IsNumber({}, { each: true })
    duration?: number[];

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
}