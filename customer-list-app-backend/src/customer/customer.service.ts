import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from "./interfaces/customer.interfaces";
import { CreateCustomerDto } from "./dto/create-customer.dto";

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}
    // Fetch all customers
    async getAllCustomers(): Promise<Customer[]> {
        return await this.customerModel.find().exec();
    }

    // Get a single Customer
    async getCustomer(customerID): Promise<Customer> {
        return await this.customerModel.findById(customerID).exec();
    }

    // Post a single customer
    async addCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return this.customerModel(createCustomerDto).save();
    }

    // Edit Customer details
    async updateCustomer(customerID, createCustomerDto: CreateCustomerDto): Promise<Customer> {
        return await this.customerModel.findByIdAndUpdate(customerID, createCustomerDto, { new: true });
    }

    // Delete a customer
    async deleteCustomer(customerID): Promise<any> {
        return await this.customerModel.findByIdAndRemove(customerID);
    }

}
