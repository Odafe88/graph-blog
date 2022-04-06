import React from 'react'
import Link from 'next/link'

import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="text-lg font-medium text-white w-full  h-auto px-4 py-2 text-center">
            <div className="flex justify-center items-center px-4 py-4">
                <div className="px-2 cursor-pointer" >
                    <Link href="https://instagram.com/odafetoearth">
                        <FaInstagram />
                    </Link>
                </div>
                <div className="px-2 cursor-pointer" >
                    <Link href="https://twitter.com/odafetoearth">
                        <FaTwitter />
                    </Link>
                </div>
                <div className="px-2 cursor-pointer" >
                    <Link href="https://github.com/Odafe88">
                        <FaGithub />
                    </Link>
                </div>

            </div>
            <p>Built by Odafe Alaiya</p>
        </div>
    )
}

export default Footer