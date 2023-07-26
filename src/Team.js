import Dice from "./Dice";

export default function Team({name,color,DiceHistory}){
  const num = DiceHistory[DiceHistory.length -1];
  const sum = DiceHistory.reduce((a,b) => a + b ,0);

  const SixCount = DiceHistory.filter((result) => result === 6).length;
  const fontColor = name === "Red" ? "#ca1515" : "#1e15ca";

  return(
    <>
    <div id="content">
     <h3><span style={{color: fontColor}}>{name}</span> 팀</h3>
     <Dice color={color} num={num} />
     <h4>주사위 내역</h4>
     <p>{DiceHistory.join(' , ')}</p>
     <h4>6이 나온 횟수</h4>
     <p>{SixCount}</p>
     <h4>주사위 눈의 합</h4>
     <p>{sum}</p>
    </div>
    </>
  )
}