"use client";
import { CardPlay } from "@/components/CardPlay";
import { MusicPlay } from "@/components/MusicPlay";
import { Sidebar } from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { RecoilRoot, useRecoilValue } from "recoil"; 
import { stateCardPlay } from '@/atoms';

const LayoutHome = ({ children }) => {
    const cardPlayActive = useRecoilValue( stateCardPlay );

    return (
        // <RecoilRoot>
            <div className="h-screen w-screen relative flex-colum justify-between text-white">
                <div className="h-full grid grid-cols-4 px-5 pt-5 gap-5">
                    <Sidebar/>
                    {children}
                    <CardPlay/>
                </div>
                {
                    cardPlayActive && (
                        <MusicPlay/>
                    ) 
                }
            </div>
        // {/* </RecoilRoot> */}
    );
};

const LayoutLanding = ({ children }) => {
    return (
        <RecoilRoot>
            { children }
        </RecoilRoot>
    );
};

const MainLayout = ({ children }) => {
    const pathname = usePathname();
    const rutasSinMenu = "/";
    return rutasSinMenu == pathname ? (
        <LayoutLanding>{ children }</LayoutLanding>
    ) : (
        <RecoilRoot>
            <LayoutHome>{ children }</LayoutHome>
        </RecoilRoot>
    );
};

export default MainLayout;
