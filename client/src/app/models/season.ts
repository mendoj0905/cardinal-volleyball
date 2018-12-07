import { Team } from './team';

export interface Season {
  id: number; // UUID
  season: string;
  year: string;
  startDate: Date;
  endDate?: Date;
  teams: Team[];
}
