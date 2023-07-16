import { Skeleton } from "@mui/material";
import s from "./CasSkeleton.module.css";
export const CasSkeleton = ()=>{
    return(
        <div className={s.cast}>
             <Skeleton  variant="rectangular" width={200} height={250}/>
             <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
             <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>

             <Skeleton  variant="rectangular" width={200} height={250}/>
             <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
             <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>
        </div>       
    )
}

export default CasSkeleton;