import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const selectedLi = atom({
    key: "selectedLi",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

