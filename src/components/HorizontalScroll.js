import { Box ,Typography} from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import Bodypart from './Bodypart'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScroll = ({data ,bodypart,setbodypart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {
      data.map((item) => (
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
             m="0 40px"
        >
        <Bodypart item={item} bodypart={bodypart}
        setbodypart={setbodypart}/>
        </Box>)
  )}
    </ScrollMenu>
  )
}

export default HorizontalScroll