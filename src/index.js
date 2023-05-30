import NotFoundPage from './pages/NotFoundPage.js';
import { BASE_URL } from './constants/routeInfo.js';
import { navigate } from './utils/history.js';
import { routes } from './constants/routeInfo.js';

let currentPage = null;
const $target = document.querySelector('#app');

/**
 * 네비바에 등록된 링크 클릭시 이벤트 등록
 */
function addEventToNavbar() {
  document.querySelector('.navbar').addEventListener('click', e => {
    const target = e.target.closest('a');
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    const path = e.target.href.replace(BASE_URL, '');
    navigate(path);
  });
}

/**
 * navigate 이벤트 작동시 path 정보에 따라서 페이지 컴포넌트 렌더링하는 이벤트 등록
 */
function addHistoryChangeEvent() {
  window.addEventListener('navigate', e => {
    const { to } = e.detail;

    if (location.pathname === to) history.replaceState(null, '', to);
    else history.pushState(null, '', to);

    let NextPage = routes.find(r => r.path.test(location.pathname))?.element || NotFoundPage;
    if (currentPage) currentPage.clearNodes();
    currentPage = new NextPage($target);
  });
}

/**
 * 전체 HTML 요소 로딩 끝나면 실행
 */
window.addEventListener('DOMContentLoaded', e => {
  addEventToNavbar();
  addHistoryChangeEvent();

  const path = location.href.replace(BASE_URL, '');
  navigate(path);
});
