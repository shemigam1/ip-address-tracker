import axios from 'axios'
import 'dotenv'

export const getIpData = async (ip: string) => {
    try {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=at_sATQ8f43tczpcCXatbscozuGTJRlN&ipAddress=${ip}`

        const data = await axios.get(url)
        console.log(data.data);

        return data.data

    } catch (error) {
        console.log(error);

    }
}