import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';


const { persistAtom } = recoilPersist();

export const selectedLi = atom({
    key: "selectedLi",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

// export const stateSidebar = atom({
//     key: "sidebar",
//     default: true
// });

export const gridPage = atom({
    key: "gridPage",
    default: "col-span-3"
})

export const stateCardPlay = atom({
    key: "cardPlay",
    default: false
});

export const dataProject = atom({
    key: "dataProject",
    default: {},
    effects_UNSTABLE: [persistAtom],
});

export const stateMusicPlay = atom({
    key: "musicPlay",
    default: {
        image: '/images/HeadPage/yo.png',
        title: 'Sobre mi'
    }
});

