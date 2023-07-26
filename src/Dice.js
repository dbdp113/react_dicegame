import Red01 from './Images/red_01.png';
import Red02 from './Images/red_02.png';
import Red03 from './Images/red_03.png';
import Red04 from './Images/red_04.png';
import Red05 from './Images/red_05.png';
import Red06 from './Images/red_06.png';
import Blue01 from './Images/blue_01.png';
import Blue02 from './Images/blue_02.png';
import Blue03 from './Images/blue_03.png';
import Blue04 from './Images/blue_04.png';
import Blue05 from './Images/blue_05.png';
import Blue06 from './Images/blue_06.png';

const DiceImg = {
  red:[Red01,Red02,Red03,Red04,Red05,Red06],
  blue:[Blue01,Blue02,Blue03,Blue04,Blue05,Blue06]
};

export default function Dice({color,num = 1}){
  const src=DiceImg[color][num-1];
  const alt=`${color}${num}`
  return(
    <>
    <img src={src} alt={alt} />
    </>
  )
}