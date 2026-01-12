import { IsInt, Min, IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateResourcesDto {
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
