import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class MetadataDto {
    fileName: string;
    author: string;
    authorUsername: string;
    authorUrl: string;
    url: string;
    title: string;
    note: string;
    content: string;
}