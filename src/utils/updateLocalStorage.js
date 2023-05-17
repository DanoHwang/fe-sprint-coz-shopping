export const updateLocalStorage = {
  addBookmark: (setter, key, value, bookmarks) => {
    setter((prev) => new Map([...prev, [key, value]]));

    const newBookmarks = JSON.stringify(Array.from(bookmarks.entries()));
    window.localStorage.setItem('bookmarks', newBookmarks);
  },

  deleteBookmark: (setter, key, bookmarks) => {
    setter((prev) => {
      const newState = new Map(prev);
      newState.delete(key);

      return newState;
    });

    const newBookmarks = JSON.stringify(Array.from(bookmarks.entries()));
    window.localStorage.setItem('bookmarks', newBookmarks);
  }
};
