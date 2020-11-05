export interface IEmployeeResponse {
    data: IEmployeeResponseData[];
}

export interface IEmployeeResponseData {
    type: string;
    id: string | number;
    attributes: IEmployeeResponseAttributes;
}

interface IEmployeeResponseAttributes {
    title: string;
    memberCards: IEmployeeResponseMemberCards;
}

interface IEmployeeResponseMemberCards {
    first: IEmployeeResponsePerson;
    second: IEmployeeResponsePerson;
    third: IEmployeeResponsePerson;
}

export interface IEmployeeResponsePerson {
    imageUrl: IEmployeeResponseImage;
    block: IEmpoyeeResponseBlock;
}

interface IEmployeeResponseImage {
    w200: string;
    w400: string;
    w1080: string;
    w1920: string;
    w2560: string;
}

interface IEmpoyeeResponseBlock {
    title: string;
    description: string;
    link: string;
    text: string | number;
}