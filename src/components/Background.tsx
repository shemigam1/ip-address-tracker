import { FC } from "react";
import { InfoBar } from "./InfoBar";

export const Bg: FC = () => {
    return (
        <>
            <div className="bg-[url('/images/pattern-bg-desktop.png')] w-screen h-2/5 flex flex-col justify-start items-center z-2 relative">
                <div className=" my-4 w-full flex flex-col items-center">

                    <h1 className=" font-bold text-2xl leading-relaxed font-sans text-white">IP Address Tracker</h1>
                    <div className="my-5 w-2/5 flex">
                        <input className=" h-11 w-full rounded-l-xl px-3" type="text" placeholder="Search for any IP address or domain" />
                        <button className=" w-12 bg-black flex justify-center items-center rounded-r-xl">
                            <img src="../../images/icon-arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
                <InfoBar />
            </div>
        </>
    )
}