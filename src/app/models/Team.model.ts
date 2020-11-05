import { Deserializable } from '../interfaces/deserialize';
import { Employee } from './Employee.model';

export class Team implements Deserializable {
    id: string;
    description: string;
    employees: Employee[];

    deserialize(input: Team): this {
        Object.assign(this, input);
        input.employees.forEach((employee: Employee) => this.employees.push(new Employee().deserialize(employee)));
        return this;
    }
}
