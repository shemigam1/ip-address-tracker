import { FC, useEffect, useState } from "react";
import { InfoBar } from "./InfoBar";
import Map from "./Map";
import axios from "axios";
// import { getIpData } from "../services/getIpData";

export const Bg: FC = () => {
    const [ip, setIp] = useState("")
    const [finalIp, setFinalIp] = useState("")
    const [ipData, setIpData] = useState({
        ip: '8.8.8.8',
        location: {
            region: 'California',
            timezone: 'UTC-05:00',
            lat: '51.505',
            lng: '-0.09'
        },
        isp: 'GOOGLE'
    })
    const [mapLocation, setMapLocation] = useState({ lat: ipData.location.lat, lng: ipData.location.lng })

    useEffect(() => {

        const getIpData = async (ip: string) => {
            // https://geo.ipify.org/api/v2/country,city?apiKey=at_sATQ8f43tczpcCXatbscozuGTJRlN&ipAddress=8.8.8.8
            const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_sATQ8f43tczpcCXatbscozuGTJRlN&ipAddress=${ip}`

            const response = await axios.get(url)
            const data = await response.data
            setIpData(data)
        }



        getIpData(finalIp)

    }, [finalIp])

    useEffect(() => {
        if (ipData.location && ipData.location.lat && ipData.location.lng) {
            setMapLocation({
                lat: ipData.location.lat,
                lng: ipData.location.lng
            });
        }
    }, [ipData]);

    // if (!ipData) {
    //     setIpData()
    // }

    const handleChange = (e: any) => {
        setIp(e.target.value)
        console.log(ip);

    }

    const handleClick = () => {
        setFinalIp(ip)
        console.log(finalIp);
        console.log(ipData);


    }
    return (
        <>
            <div className="bg-[url('/images/pattern-bg-desktop.png')] w-screen h-2/5 flex flex-col justify-start items-center z-2 relative">
                <div className=" my-4 w-full flex flex-col items-center">

                    <h1 className=" font-bold text-2xl leading-relaxed font-sans text-white">IP Address Tracker</h1>
                    <div className="my-5 w-2/5 flex">
                        <input
                            id="ip"
                            value={ip}
                            onChange={handleChange}
                            className=" h-11 w-full rounded-l-xl px-3"
                            type="text" placeholder="Search for any IP address or domain" />
                        <button
                            onClick={handleClick}
                            className=" w-12 bg-black flex justify-center items-center rounded-r-xl">
                            <img src="../../images/icon-arrow.svg" alt="" />
                        </button>
                    </div>
                </div>
                <InfoBar ipData={ipData} />
            </div>
            <Map lat={mapLocation.lat} lng={mapLocation.lng} />
        </>
    )
}