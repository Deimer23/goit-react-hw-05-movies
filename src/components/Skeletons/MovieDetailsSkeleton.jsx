import { Skeleton } from "@mui/material"

const MovieDetailsSkeleton = ()=>{
    return(
        <div>
            <div>
            <Skeleton variant="rectangular" width={300} height={250} />
            </div>
            <div>
                <Skeleton variant="h1"/>
            </div>
        </div>
    )
}

export default MovieDetailsSkeleton;