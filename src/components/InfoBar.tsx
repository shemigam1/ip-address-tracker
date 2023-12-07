import { FC } from "react"

export const InfoBar: FC = () => {
    const info = {
        ip_address: '192.212.174.101',
        location: "Brooklyn NY 10001",
        timezone: 'UTC -05:00',
        isp: "SpaceZ Starlink"
    }
    return (
        <ul className="flex justify-evenly w-3/5 border border-white py-3 rounded-3xl bg-white">
            <li className=" flex flex-col gap-2 justify-center px-6">
                <p className=" text-xs font-sans">ip address</p>
                <p className=" text-2xl font-bold">{info.ip_address}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">location</p>
                <p className="text-2xl font-bold">{info.location}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">timezone</p>
                <p className="text-2xl font-bold">{info.timezone}</p>
            </li>

            <li className=" flex flex-col gap-2 justify-center border-l px-4">
                <p className="text-xs font-sans">isp</p>
                <p className="text-2xl font-bold">{info.isp}</p>
            </li>
        </ul>
    )
}