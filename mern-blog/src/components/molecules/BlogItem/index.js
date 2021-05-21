import React from 'react'
import { useHistory } from 'react-router'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'

import './BlogItem.scss' 

const BlogItem = () => {
    const history = useHistory()

    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Fugiat consectetur est commodo proident laboris eu proident elit elit cillum et anim consequat quis. Dolor ex esse et do non nulla quis et veniam veniam ad. Dolor laborum fugiat aliquip nisi ut. Velit laborum anim occaecat occaecat Lorem elit magna in proident commodo laborum laborum proident. Ad eiusmod labore aliquip culpa dolore sint ipsum amet est id. Sint duis minim Lorem nisi excepteur qui minim aliquip sit. Laboris eiusmod occaecat sint excepteur.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem