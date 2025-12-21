import {
    IsArray,
    IsDateString,
    IsEmail,
    IsOptional,
    IsString,
} from 'class-validator';

export class UserRequestDto {
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    ids: string[];

    @IsOptional()
    @IsArray()
    @IsEmail({}, { each: true })
    emails: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    roles: string[];
    
    @IsOptional()
    @IsDateString()
    createdAt: Date;

    @IsOptional()
    @IsDateString()
    updatedAt: Date;

    @IsOptional()
    @IsDateString()
    deletedAt: Date;
}