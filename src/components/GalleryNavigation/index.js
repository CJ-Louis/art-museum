import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {

    const galleryLinks = galleries.map(
        gallery => <NavLink to={`/galleries/${gallery.gallerynumber}`}>{gallery.name}{'   '}</NavLink>
    )

    return (
            <nav>
                <NavLink to='/' >HOME {' '}</NavLink>
                {galleryLinks}
            </nav>
    )
}

export default GalleryNavigation
