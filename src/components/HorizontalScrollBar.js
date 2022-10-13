import React , {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import ExerciseCard from './ExerciseCard'

const HorizontalScrollBar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
      <div className='horizontal-scroll'>
        {data.map((item) => (
            <Box
                key={item.id||item}
                itemId={item.id||item}
                title   ={item.id||item}
                m="0 40px"
                >
                    {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} 
                    setBodyPart={setBodyPart}/> 
                    : <ExerciseCard exercise={item} />}
            </Box>
        )
        )}
      </div>
  )
}

export default HorizontalScrollBar;