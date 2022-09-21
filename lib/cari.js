/**
 * @ Author: ArugaZ
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-07-19 19:18:16
 * @ Description: 
 */

import axios from 'axios'
import { Agent } from 'https'

const agent = new Agent({
    rejectUnauthorized: false
})


const ktp = (namanya) => new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/penduduk/${namanya}`, { httpsAgent: agent })
        .then(res => {
            const result = res.data
            restext = json.string
            resolve(restext)
        }).catch((err) => {
            console.error(err)
            reject(err)
        })
})


export default ktp