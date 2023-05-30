/**
 *
 * @param {string} to
 */
export const navigate = to => {
  const navigateEvent = new CustomEvent('navigate', {
    detail: { to },
  });

  dispatchEvent(navigateEvent);
};
