import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hospital, HospitalDocument } from './schemas/hospital.schema';
import { Model } from 'mongoose';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateResourcesDto } from './dto/update-resources.dto';

@Injectable()
export class HospitalsService {
  constructor(
    @InjectModel(Hospital.name) private hospitalModel: Model<HospitalDocument>,
  ) {}

  async create(dto: CreateHospitalDto) {
    const created = await this.hospitalModel.create(dto);
    return created;
  }

  async findAll(query?: {
    state?: string;
    lga?: string;
    oxygenAvailable?: string;
  }) {
    const filter: any = {};
    if (query?.state) filter.state = query.state;
    if (query?.lga) filter.lga = query.lga;
    if (query?.oxygenAvailable !== undefined) {
      filter.oxygenAvailable = query.oxygenAvailable === 'true';
    }
    return this.hospitalModel.find(filter).sort({ updatedAt: -1 }).exec();
  }

  async findOne(id: string) {
    const hospital = await this.hospitalModel.findById(id).exec();
    if (!hospital) throw new NotFoundException('Hospital not found');
    return hospital;
  }

  async updateResources(id: string, dto: UpdateResourcesDto) {
    const updated = await this.hospitalModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Hospital not found');
    return updated;
  }

  async delete(id: string) {
    const deleted = await this.hospitalModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Hospital not found');
    return { message: 'Hospital deleted' };
  }
}
