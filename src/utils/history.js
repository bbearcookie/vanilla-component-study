/**
 * path 경로를 to 로 이동시키는 커스텀 이벤트를 작동시킵니다.
 * @param {string} to
 */
export const navigate = to => {
  const navigateEvent = new CustomEvent('navigate', {
    detail: { to },
  });

  dispatchEvent(navigateEvent);
};
