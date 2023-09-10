export default function Post({post}){
    const {userId,id,title,body} = post;
    return(
        <div className="post">
            <p>UserId: {userId} </p>
            <h3>Title: {title} </h3>
            <p>Body: {body} </p>
            <p>Id: {id} </p>
        </div>
    )
}