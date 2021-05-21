import React from 'react'
import { useHistory } from 'react-router'
import {RegisterBg} from '../../assets'
import {Gap, Link} from '../../components'

import './DetailBlog.scss'

const DetailBlog = () => {
    const history = useHistory()

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Veniam Lorem elit sit nisi sit non ex ullamco. Magna ipsum reprehenderit exercitation ipsum consectetur quis incididunt deserunt ex eiusmod. Labore qui commodo deserunt irure Lorem. Lorem officia aliquip laboris cillum Lorem cillum deserunt ipsum cillum minim elit consectetur ad.</p>
            <Gap height={20} />
            <Link title="Kembali ke home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
