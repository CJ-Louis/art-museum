import { NavLink } from "react-router-dom"

function GalleryNavigation({galleries}) {
    console.log(galleries)
    const galleryLinks = galleries.map(gallery => <NavLink to={`/galleries/${gallery.gallerynumber}`}>{gallery.name}{'   '}</NavLink>
    )
    console.log('This is galleryLinks',galleryLinks)
    return (
            <nav>

                {galleryLinks}
            </nav>
    )
}

export default GalleryNavigation
