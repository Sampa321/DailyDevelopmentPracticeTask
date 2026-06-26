
export default function PostDetails(props){
    const {autherAvatar, author, title, content, likes, comments, category,tags} = props;
    return(
        <div>
            <div>
                <img src="" alt="" srcset="">{autherAvatar}</img>
                <p>{author}</p>
            </div>
        </div>
    ) 
}