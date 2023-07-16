import { Skeleton } from "@mui/material";
import s from "./ReviewsSkeleton.module.css"

export const ReviewsSkeleton = ()=>{
    return(
        <div className={s.reviews}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
            <Skeleton variant="rectangular" width={10000} height={200}/>

            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
            <Skeleton variant="rectangular" width={10000} height={200}/>
        </div>
    )
}