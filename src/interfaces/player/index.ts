import { ParentInterface } from 'interfaces/parent';
import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent?: number;
    training_plan?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
}
