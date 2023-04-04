import React,{useCallback,useMemo} from 'react'
import axios from 'axios'

import useCurrentUser from '../hooks/useCurrentUser'
import useFavorites from '../hooks/useFavorites'
import { AiOutlinePlus } from 'react-icons/ai'

interface FavoritesButtonProps{
    movieId:string,
}

const FavoriteButton:React.FC<FavoritesButtonProps> = ({movieId}) => {
  
  
    return (
    <div className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
        <AiOutlinePlus className='text-white ' size={25}/>
    </div>
  )
}

export default FavoriteButton