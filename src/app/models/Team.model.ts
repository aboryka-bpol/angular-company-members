import { Deserializable } from '../interfaces/deserialize';
import { Employee } from './Employee.model';

export class Team implements Deserializable {
    description: string;
    employees: Employee[];

    deserialize(input: Team): this {
        Object.assign(this, input);
        this.employees = input.employees.map(employee => new Employee().deserialize(employee));
        return this;
    }
}
