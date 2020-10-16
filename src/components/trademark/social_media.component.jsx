import React from 'react';
import './social_media.styles.css';

export const SocialLogos = () => {

    const socialMedia = [
        [
            'https://www.facebook.com/RaesandKaysMeltingPotBoulder',
            'https://image.flaticon.com/icons/png/512/59/59439.png',
            'facebook link'
        ],
        [
            'href',
            'https://cdn.worldvectorlogo.com/logos/instagram-2016.svg',
            'instagram link'
        ],
    ]

    return (
        <div className="social_image">
            {socialMedia.map((media, index) => {
                return (
                    <a
                        href={media[0]}
                        key={index}
                    >
                        <img
                            src={media[1]}
                            alt={media[2]}
                            height="20px"
                            width="20px"
                        />
                    </a>
                )
            })}
        </div>
    )
}