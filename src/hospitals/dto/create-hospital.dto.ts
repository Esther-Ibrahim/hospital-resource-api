import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  lga: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  availableBeds?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  availableICU?: number;

  @IsBoolean()
  @IsOptional()
  oxygenAvailable?: boolean;

  @IsBoolean()
  @IsOptional()
  emergencyAvailable?: boolean;

  @IsString()
  @IsOptional()
  note?: string;
}
