export const state = () => ({});

export const mutations = {};

export const actions = {
    nuxtServerInit({ commit, dispatch, state }, { req }) {
        console.log('nuxtServerInit')
        /*
            nuxtServerInit과 함께 각 페이지의  fetch를 실행해서 데이터를 채워 넣는다.
            이렇게 미리 데이터를 채워넣는게 서버사이드 렌더링에서 꽤나 중요하다.

            nuxtServerInit은 모든 페이지에 다 실행되는 공통되는 것을 채워넣으면 되고

            각 페이지의 fetch는 각 페이지에서 필요한 것만 가져다 쓸 수 있게 하면 된다.


         */
        return dispatch('Users/loadUser');
    }
}