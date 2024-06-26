import { v4 as uuidv4 } from "uuid";

export const createTravelWithId = (travel) => {
  return {
    ...travel,
    id: uuidv4(),
  };
};
