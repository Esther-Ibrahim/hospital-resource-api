import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HospitalDocument = Hospital & Document;

@Schema({ timestamps: true })
export class Hospital {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  address: string;

  @Prop({ required: true, trim: true })
  state: string;

  @Prop({ required: true, trim: true })
  lga: string;

  @Prop({ required: true, trim: true })
  phone: string;

  @Prop({ trim: true })
  email?: string;

  @Prop({ default: 0, min: 0 })
  availableBeds: number;

  @Prop({ default: 0, min: 0 })
  availableICU: number;

  @Prop({ default: true })
  oxygenAvailable: boolean;

  @Prop({ default: true })
  emergencyAvailable: boolean;

  @Prop({ trim: true })
  note?: string;
}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
