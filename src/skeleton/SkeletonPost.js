import Skeleton from "./Skeleton"

const SkeletonPost = () =>{

    return (
        <div className="posts">
                <Skeleton classes="title width-50" />
                <Skeleton classes="text width-70" />
                <Skeleton classes="text width-100" />
                <Skeleton classes="text width-100" />
        </div>
    )
}

export default SkeletonPost