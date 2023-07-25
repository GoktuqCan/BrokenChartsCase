export type AsyncAction = ReturnType<typeof asyncActionType>;
export const asyncActionType = (type: string) => ({
  REQUEST: `${type}_REQUEST`,
  SUCCESS: `${type}_SUCCESS`,
  FAIL: `${type}_FAIL`,
  CANCEL: `${type}_CANCEL`,
});
