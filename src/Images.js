import React from 'react'
import {SRLWrapper} from 'simple-react-lightbox'

const clientLogos = [
  {
    uId: 1,
    src: './clientlogos/mcdonalds.png',
    fullImg: '',
    altTag: "McDonald's",
  },
  {
    uId: 2,
    src: './clientlogos/bmw.png',
    fullImg: './clientfullsizeimg/bmw_full.jpeg',
    altTag: 'BMW',
  },
  {
    uId: 3,
    src: './clientlogos/dell.png',
    fullImg: './clientfullsizeimg/dell_full.jpg',
    altTag: 'DELL',
  },
  {
    uId: 4,
    src: './clientlogos/durex.png',
    fullImg: '',
    altTag: 'Durex',
  },
  {
    uId: 5,
    src: './clientlogos/hp.png',
    fullImg: './clientfullsizeimg/hp_full.jpg',
    altTag: 'Hewlett-Packard',
  },
  {
    uId: 6,
    src: './clientlogos/heineken.png',
    fullImg: '',
    altTag: 'Heineken',
  },
  {
    uId: 7,
    src: './clientlogos/ea2.png',
    fullImg: '',
    altTag: 'Electronic Arts',
  },
  {
    uId: 8,
    src: './clientlogos/alienware2.png',
    fullImg: './clientfullsizeimg/alienware_full.jpg',
    altTag: 'Alienware',
  },
  {
    uId: 9,
    src: './clientlogos/minicooper.png',
    fullImg: '',
    altTag: 'MINI',
  },
  {
    uId: 10,
    src: './clientlogos/real.png',
    fullImg: '',
    altTag: 'real',
  },
  {
    uId: 11,
    src: './clientlogos/toyota.png',
    fullImg: '',
    altTag: 'Toyota',
  },
  {uId: 12, src: './clientlogos/pge.png', fullImg: '', altTag: 'PGE'},
]

const getClientLogos = clientLogos.map(
  ({uId, src, fullImg, altTag}) => {
    let classStore = 'px-6 py-6 col-md-3'
    if (!fullImg) {
      fullImg = './clientfullsizeimg/nopreview.png'
    } else classStore = classStore + ' top-right-triangle'
    return (
      <div className={classStore}>
        <SRLWrapper>
          <a href={fullImg} data-attribute="SRL">
            <img
              className="px-6 py-6 col-md-12"
              key={uId}
              src={src}
              alt={altTag}
            />
          </a>
        </SRLWrapper>
      </div>
    )
  },
)

class Images extends React.Component {
  render() {
    return getClientLogos
  }
}

export default Images
