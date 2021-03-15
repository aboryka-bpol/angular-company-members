
import { ITeamResponseAttributes } from '../interfaces/team-members';
import { Member } from './Member';

export class Team {
    description: string;
    members: Member[];

    constructor(data: ITeamResponseAttributes) {
        const { title, memberCards } = data;

        this.description = title;
        this.members = Object.values(memberCards).map(memberCard => new Member(memberCard));
    }
}
