export interface IEmployeeImages {
    verySmall?: string;
    small?: string;
    medium?: string;
    large?: string;
    veryLarge?: string;
}

export interface IEmployee {
    name?: string;
    profession?: string;
    emailAddress?: string;
    phoneNumber?: string | number;
    images?: IEmployeeImages;
}

export interface IEmployeeData {
    employees: IEmployee[];
    description: string;
}
