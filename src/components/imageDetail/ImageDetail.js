import React, { useEffect, useState } from 'react'
import '../../css/ImageDetail.css'
import Like from '../../assets/images/profilePic/like.png'
import Unlike from '../../assets/images/profilePic/unlike.png'
import { connect } from 'react-redux'
import { fetchComments } from '../../redux/actionCreators'
import LoadComments from '../loadComments/LoadComments'
import CommentForm from '../commentForm/CommentForm'
import { Link } from 'react-router-dom'

const mapStateToProps = state => {
    return {
        comments: state.comments,
        auth: state.auth,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments:() => dispatch(fetchComments())
    }
}

export const ImageDetail = (props) => {
    const [toggleLike,setToggleLike] = useState(false);

    useEffect(()=> {
        props.fetchComments();
    },[])
    
    const toggleLikeHandler = () => {
            setToggleLike(!toggleLike);
    }

    const selectedComment = props.comments.comments.filter(comments => comments.imageId === props.image.id)
    
    const commentLabel = parseInt(selectedComment.length) === 1 ? "comment" : "comments";
    
    const liked = toggleLike === true ? Like:Unlike;
    
    const commentLoading = props.comments.isLoading

    const postComments = <CommentForm imageId={props.image.id}/>

    const postCommentModule = props.token !== null? postComments: (<Link 
                                                                        to='/login'
                                                                        style={{
                                                                            textDecoration:'none',
                                                                        }}
                                                                    ><h6 className='postComment'>Please! Log in, to post comments</h6>
                                                                    </Link>)

    return (
        <div>
            <div className='ImageDetailModal'>
                <div>
                    <img className='MainImage' src={props.image.image} alt="image" />
                </div>
                <div className='TextView' >
                    <div className='LikeComment'>
                        <div className='Like'>
                            <img style={{width:'2rem', height:"2rem"}} src={liked} alt="logo" onClick={toggleLikeHandler}/>
                        </div>
                        <div>
                            <p style={{fontSize:'20px', marginLeft:'5px'}}>{selectedComment.length} {commentLabel}</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className=''>
                            <LoadComments comments={selectedComment} commentLoading={commentLoading}/>
                        </div>
                            <hr />
                            <div>
                                <div className='commentBox'>
                                    {postCommentModule}
                                </div>
                            </div>
                            <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail)