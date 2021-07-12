import {SAVE_TOKEN} from './types';

export const saveToken = data => ({
  type: SAVE_TOKEN,
  payload: data,
});
