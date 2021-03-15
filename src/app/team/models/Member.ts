import { ITeamResponseMember } from '../interfaces/team-members';

export class Member {
    name: string;
    profession: string;
    emailAddress: string;
    phoneNumber: string | number;
    images;

    constructor(data: ITeamResponseMember) {
        const { imageUrl, block: { title, description, link, text }} = data;

        this.name = title;
        this.profession = description;
        this.emailAddress = link;
        this.phoneNumber = text;

        this.images = imageUrl;
    }
}
