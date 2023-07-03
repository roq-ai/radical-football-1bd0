import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface TrainingPlanInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface TrainingPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
}
