export interface ITeamResponse {
    data: ITeamResponseData[];
}

export interface ITeamResponseData {
    type: string;
    id: string | number;
    attributes: ITeamResponseAttributes;
}

export interface ITeamResponseAttributes {
    title: string;
    memberCards: ITeamResponseMemberCards;
}

interface ITeamResponseMemberCards {
    first: ITeamResponseMember;
    second: ITeamResponseMember;
    third: ITeamResponseMember;
}

export interface ITeamResponseMember {
    imageUrl: ITeamResponseImage;
    block: IEmpoyeeResponseBlock;
}

export interface ITeamResponseImage {
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
