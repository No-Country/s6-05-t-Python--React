const YoutubeIcon = ({color}) => {
    return(
        <svg className="cursor-pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 20.0001L20.2533 16.0001L13.3333 12.0001V20.0001ZM28.7467 9.56008C28.92 10.1867 29.04 11.0267 29.12 12.0934C29.2133 13.1601 29.2533 14.0801 29.2533 14.8801L29.3333 16.0001C29.3333 18.9201 29.12 21.0667 28.7467 22.4401C28.4133 23.6401 27.64 24.4134 26.44 24.7467C25.8133 24.9201 24.6667 25.0401 22.9067 25.1201C21.1733 25.2134 19.5867 25.2534 18.12 25.2534L16 25.3334C10.4133 25.3334 6.93332 25.1201 5.55999 24.7467C4.35999 24.4134 3.58666 23.6401 3.25332 22.4401C3.07999 21.8134 2.95999 20.9734 2.87999 19.9067C2.78666 18.8401 2.74666 17.9201 2.74666 17.1201L2.66666 16.0001C2.66666 13.0801 2.87999 10.9334 3.25332 9.56008C3.58666 8.36008 4.35999 7.58675 5.55999 7.25341C6.18666 7.08008 7.33332 6.96008 9.09332 6.88008C10.8267 6.78675 12.4133 6.74675 13.88 6.74675L16 6.66675C21.5867 6.66675 25.0667 6.88008 26.44 7.25341C27.64 7.58675 28.4133 8.36008 28.7467 9.56008Z" fill={color ? color : "#212121"}/>
        </svg>
    )
}

export default YoutubeIcon