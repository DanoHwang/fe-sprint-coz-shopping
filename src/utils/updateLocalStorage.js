export const updateLocalStorage = {
  addBookmark: (setter, key, value) => {
    setter((prev) => {
      const newState = new Map([...prev, [key, value]]);

      const newBookmarks = JSON.stringify(Array.from(newState.entries()));
      window.localStorage.setItem('bookmarks', newBookmarks);

      return newState;
    });
  },

  deleteBookmark: (setter, key) => {
    setter((prev) => {
      const newState = new Map(prev);
      newState.delete(key);

      const newBookmarks = JSON.stringify(Array.from(newState.entries()));
      window.localStorage.setItem('bookmarks', newBookmarks);

      return newState;
    });
  }
};
