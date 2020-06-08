import { Document, model, Schema, Types } from 'mongoose';
import { SeasonType } from './league.types';

interface League {
  title: string;
  season: SeasonType;
  year: number;
}

export interface LeagueModel extends League, Document { }

const leagueSchema = new Schema({
  _id: {
    type: Types.ObjectId,
    required: true
  },
  title: String,
  season: String,
  year: Number
});

export const League = model<LeagueModel>('League', leagueSchema);
