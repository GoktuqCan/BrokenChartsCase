import { ACTIVITY_TYPES } from 'state/constants';
import { Activity } from 'state/home/types';

export const getActivityDescription = (item: Activity) =>
  `${(ACTIVITY_TYPES as any)[item.type]} • ${item.participants} Person • ${
    item.price > 0.5 ? 'Expensive' : 'Cheap'
  }`;
