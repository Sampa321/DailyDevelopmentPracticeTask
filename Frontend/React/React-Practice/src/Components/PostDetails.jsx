
export default function PostDetails(post){ 
    return(
        <div className="border-1 rounded-xl justify-center items-center p-2 bg-blue-300">
            <div className="flex gap-2">
                <img className="w-7 h-7 rounded-full" src={post.authorAvatar} alt="" />
                <span className= "font-bold">{post.author}</span> 
                <div>{post.createdAt.slice(5,10)}</div>
            </div>
            <div className="text-blue-700">{post.title}</div>
            <div className="text-gray-500">{post.content}</div>
            <div>👍{post.likes} || 💬{post.comments} || {post.category}</div>
            <div className="text-purple-900 font-semibold">#{post.tags[0]} #{post.tags[1]} #{post.tags[2]}</div>
        </div>
    ) 
}