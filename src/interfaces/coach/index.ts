import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  _count?: {
    training_plan?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
