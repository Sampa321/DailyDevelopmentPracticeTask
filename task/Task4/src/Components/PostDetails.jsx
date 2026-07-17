
export default function PostDetails(post){ 
    return(
        <div className="border-1">
            <div>
                <img src={post.authorAvatar} alt="" />
                <span>{post.author}</span> 
                <div>{post.createAt}</div>
            </div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>👍{post.likes} || 💬{post.comments} || {post.category}</div>
            <div>#{post.tags[0]} #{post.tags[1]} #{post.tags[2]}</div>
        </div>
    ) 
}