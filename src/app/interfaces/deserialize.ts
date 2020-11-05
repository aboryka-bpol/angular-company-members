import { Employee } from '../models/Employee.model';
import { Images } from '../models/Images.model';
import { Team } from '../models/Team.model';

type DeserializeTypes = Team | Employee | Images;
export interface Deserializable {
    deserialize(input: DeserializeTypes): this;
}
