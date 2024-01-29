"use client";
import { CardPlay } from "@/components/CardPlay";
import { MusicPlay } from "@/components/MusicPlay";
import { Sidebar } from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil"; 

const LayoutHome = ({ children }) => {
    return (
        <RecoilRoot>
            <div className="h-screen w-screen relative flex-colum justify-between text-white">
                <div className="h-full grid grid-cols-4 px-5 pt-5 gap-5">
                    <Sidebar/>
                    {children}
                    <CardPlay/>
                </div>
                <MusicPlay/>
            </div>
        </RecoilRoot>
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
        <LayoutHome>{ children }</LayoutHome>
    );
};

export default MainLayout;
