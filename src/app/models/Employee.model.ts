import { Deserializable } from '../interfaces/deserialize';
import { Images } from './Images.model';

export class Employee implements Deserializable {
    name: string;
    profession: string;
    emailAddress: string;
    phoneNumber: string | number;
    images: Images;

    deserialize(input: Employee): this {
        Object.assign(this, input);
        this.images = new Images().deserialize(input.images);
        return this;
    }
}
