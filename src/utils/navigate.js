/**
 *
 * @param {string} to
 */
export const navigate = to => {
  const historyChangeEvent = new CustomEvent('historychange', {
    detail: { to },
  });

  dispatchEvent(historyChangeEvent);
};
