import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';
import { League, LeagueModel } from './league.model';
import { LeagueInput } from './league.types';

export class LeagueDAO {

  public static async getAll(): Promise<LeagueModel[]> {
    return League.find();
  }

  public static async get(id: string): Promise<any> {
    return League.findById(id);
  }

  public static async create(league: LeagueInput): Promise<LeagueModel> {
    const addSeason = new League({
      _id: new Types.ObjectId(),
      season: league.season,
      title: league.title,
      year: league.year
    });

    return addSeason.save();
  }

  public static async delete(id: string): Promise<LeagueModel[]> {
    await League.deleteOne({ _id: id });
    return this.getAll();
  }

  public static async update(id: any, league: LeagueInput) {
    await League.updateOne({ _id: id }, league);
    return this.get(id);
  }
}
