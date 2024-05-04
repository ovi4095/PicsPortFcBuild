import React, { useState } from 'react'
import '../../css/ImageDetail.css'
import Send from '../../assets/comment/sendBtn.png'
import Sent from '../../assets/comment/sentBtn.png'
import { connect } from 'react-redux'
import { Button, Input } from 'reactstrap'
import { addComment, fetchComments } from '../../redux/actionCreators'

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        fetchComments: () => dispatch(fetchComments()),
    }
}

export const CommentForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputComment, setInputComment] = useState('');
    const [toggleHover, setToggleHover] = useState(false)
    const sendBtn = toggleHover === false? Send: Sent;
    const toggleHoverHandler = () => {
        setToggleHover(!toggleHover)
    }
    const handleInputChange = event => {
        if(event.target.name === 'inputName') {
            setInputName(event.target.value)
        } else if(event.target.name === 'inputComment') {
            setInputComment(event.target.value)
        }
    }
    let error = null;
    const handleAddingReview = () => {
        // console.log("name:", inputName)
        // console.log("comment:", inputComment)
        if (inputName === '' || inputComment === '') {
            alert('Must enter name and comment, to post your comment')
        } else {
            props.addComment({
                id: Math.random().toString(),
                author: inputName,
                comment: inputComment,
                imageId: props.imageId,
                date: new Date().toString()
            })
            
        }
         setInputName('');
         setInputComment('');
         setTimeout(()=> {
            props.fetchComments();
         },500)
         
        }
  return (  
            <div>
                {error}
                <div className='CommentBox--flex'> 
                    <div className='CommentBoxInput'>
                        <Input
                            type="text"
                            name='inputName'
                            value={inputName}
                            className='form-control'
                            placeholder='Your Name'
                            onChange={handleInputChange}
                        />
                        <br />
                        <Input
                            type="text"
                            name='inputComment'
                            value={inputComment}
                            className='form-control'
                            placeholder='Comment Here'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='CommentBoxBtn'>
                        <Button
                            type='submit'
                            style={{background:'none', 
                                    padding:'0px', 
                                    margin:'0px', 
                                    border:'none'}}
                            onClick={() => {
                                handleAddingReview();
                            }}  
                            >
                                <img
                                    style={{width:'30px', marginLeft:'1rem'}}
                                    src={sendBtn}
                                    alt="sendBtn"
                                    onMouseEnter={toggleHoverHandler}
                                    onMouseLeave={toggleHoverHandler}
                                /> 
                        </Button>
                    </div>
                </div>
            </div>
  )
}


export default connect(null, mapDispatchToProps)(CommentForm)