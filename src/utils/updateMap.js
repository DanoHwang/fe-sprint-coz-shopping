export const updateMap = {
  addMap: (setter, key, value) => {
    setter((prev) => new Map([...prev, [key, value]]));
  },

  deleteMap: (setter, key) => {
    setter((prev) => {
      const newState = new Map(prev);
      newState.delete(key);

      return newState;
    });
  }
};
