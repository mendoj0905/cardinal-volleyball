export interface LeagueInput {
  title: string;
  season: SeasonType;
  year: number;
}

export enum SeasonType {
  FALL = 'Fall',
  WINTER = 'Winter',
  SPRING = 'Spring',
  SUMMER = 'Summer'
}
