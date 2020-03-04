import React from 'react'
import Lightbox from 'react-image-lightbox'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import 'react-image-lightbox/style.css'

const clientLogos = [
  {
    photoIndex: 1,
    src: './clientlogos/mcdonalds.png',
    fullImg: '',
    altTag: "McDonald's",
  },
  {
    photoIndex: 2,
    src: './clientlogos/bmw.png',
    fullImg: './clientfullsizeimg/bmw_full.jpeg',
    altTag: 'BMW',
  },
  {
    photoIndex: 3,
    src: './clientlogos/dell.png',
    fullImg: './clientfullsizeimg/dell_full.jpg',
    altTag: 'DELL',
  },
  {
    photoIndex: 4,
    src: './clientlogos/durex.png',
    fullImg: '',
    altTag: 'Durex',
  },
  {
    photoIndex: 5,
    src: './clientlogos/hp.png',
    fullImg: './clientfullsizeimg/hp_full.jpg',
    altTag: 'Hewlett-Packard',
  },
  {
    photoIndex: 6,
    src: './clientlogos/heineken.png',
    fullImg: '',
    altTag: 'Heineken',
  },
  {
    photoIndex: 7,
    src: './clientlogos/ea2.png',
    fullImg: '',
    altTag: 'Electronic Arts',
  },
  {
    photoIndex: 8,
    src: './clientlogos/alienware2.png',
    fullImg: './clientfullsizeimg/alienware_full.jpg',
    altTag: 'Alienware',
  },
  {
    photoIndex: 9,
    src: './clientlogos/minicooper.png',
    fullImg: '',
    altTag: 'MINI',
  },
  {
    photoIndex: 10,
    src: './clientlogos/real.png',
    fullImg: '',
    altTag: 'real',
  },
  {
    photoIndex: 11,
    src: './clientlogos/toyota.png',
    fullImg: '',
    altTag: 'Toyota',
  },
  {
    photoIndex: 12,
    src: './clientlogos/pge.png',
    fullImg: '',
    altTag: 'PGE',
  },
]

class Images extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lightboxIndex: 0,
      lightboxUrl: './clientfullsizeimg/nopreview.png',
      isOpen: false,
    }
  }

  targetElement = null

  componentDidMount() {
    this.targetElement = document.querySelector('.ReactModalPortal')
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }
  render() {
    const {lightboxUrl, isOpen} = this.state

    const clientElement = clientLogos.map(
      ({photoIndex, src, fullImg, altTag}) => {
        let classStore = 'px-6 py-6 col-md-3'
        if (!fullImg) {
          fullImg = './clientfullsizeimg/nopreview.png'
          classStore += ' order-md-1'
        } else classStore += ' top-right-triangle'
        return (
          <div className={classStore}>
            <img
              className="px-6 py-6 col-md-12"
              key={photoIndex}
              src={src}
              alt={altTag}
              onClick={() => {
                disableBodyScroll(this.targetElement)
                this.setState({
                  lightboxIndex: {photoIndex},
                  lightboxUrl: fullImg,
                  isOpen: true,
                })
              }}
            />
          </div>
        )
      },
    )

    return (
      <React.Fragment>
        {clientElement}
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={lightboxUrl}
              onCloseRequest={() => {
                enableBodyScroll(this.targetElement)
                this.setState({isOpen: false})
              }}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default Images
