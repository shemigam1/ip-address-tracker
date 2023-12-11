import { FC } from "react"

interface infoBarProps {
    ipData: any
}

export const InfoBar: FC<infoBarProps> = ({ ipData }) => {
    console.log(ipData);

    return (
        <ul className="flex justify-evenly w-3/5 border border-white py-3 rounded-3xl bg-white">
            <li className=" flex flex-col gap-2 justify-center px-6">
                <p className=" text-xs font-sans">ip address</p>
                <p className=" text-2xl font-bold">{ipData.ip}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">location</p>
                <p className="text-2xl font-bold">{ipData.location.region}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">timezone</p>
                <p className="text-2xl font-bold">{ipData.location.timezone}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">isp</p>
                <p className="text-2xl font-bold">{ipData.isp}</p>
            </li>
        </ul>
    )
}