import { IEmployeeResponseData, IEmployeeResponsePerson } from '../interfaces/employee';
import { Images } from '../models/Images.model';
import { Team } from '../models/Team.model';

export const mapEmployeesData = (
    acc: IEmployeeResponsePerson[],
    { imageUrl, block: { title, description, link, text }}: IEmployeeResponsePerson
    ) => {
    const { w200, w400, w1080, w1920, w2560 } = imageUrl;
    const images: Partial<Images> = {
        verySmall: w200,
        small: w400,
        medium: w1080,
        large: w1920,
        veryLarge: w2560
    };

    return [
        ...acc,
        {
            name: title,
            profession: description,
            emailAddress: link,
            phoneNumber: text,
            images
        }
    ];
};


export default function(data: IEmployeeResponseData[]): Partial<Team[]> {
    return data.reduce((acc, { attributes }) => {
        const { memberCards, title } = attributes;
        const employeesDetails = Object.values(memberCards);

        return [
            ...acc,
            {
                employees: employeesDetails.reduce(mapEmployeesData, []),
                description: title
            }
        ];
    }, []);
}

