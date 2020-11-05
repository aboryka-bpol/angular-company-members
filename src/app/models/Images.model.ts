import { Deserializable } from '../interfaces/deserialize';

export class Images implements Deserializable{
    verySmall: string;
    small: string;
    medium: string;
    large: string;
    veryLarge: string;

    deserialize(input: Images): this {
        Object.assign(this, input);
        return this;
    }
}
