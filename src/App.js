import './App.css';
import Team from './Team';
import Button from './Button';
import { useState } from 'react';

function random(n){
  return Math.ceil(Math.random() * n);
}

export default function App(){
  const [redTeam,setRedTeam] = useState([]);
  const [blueTeam,setBlueTeam] = useState([]);
  const [Winner,setWinner] = useState('');
  
  //modal
  const [modalOpen,setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);

  //폰트컬러
  const fontColor = Winner === "Red" ? "#ca1515" : "#1e15ca";

  const diceNum = redTeam.length || blueTeam.length;

  function playClick(){
    const redSixCount = redTeam.filter((result) => result === 6).length;
    const blueSixCount = blueTeam.filter((result) => result === 6).length;
  
    const redDiceSum = redTeam.reduce((a,b) => a + b ,0);
    const blueDiceSum = blueTeam.reduce((a,b) => a + b ,0);

    if (redSixCount >= 3) {
        setWinner("Red");
        setModalOpen(true);
    } else if(blueSixCount >= 3){
      setWinner("Blue");
      setModalOpen(true);
    } else if (redTeam.length >= 15 || blueTeam.length >= 15){
      if (redDiceSum > blueDiceSum){
        setWinner("Red");
        setModalOpen(true);
      } else if(blueDiceSum > redDiceSum){
        setWinner("Blue");
        setModalOpen(true);
      } else if(redDiceSum === blueDiceSum){
        setWinner("무승부");
        setModalOpen(true);
      }
    }

    if(redTeam.length < 15 && blueTeam.length < 15){
      const redDice = random(6);
      const blueDice = random(6);
  
      setRedTeam([...redTeam, redDice]);
      setBlueTeam([...blueTeam, blueDice]);
    }
  }

  function resetGame(){
    setRedTeam([]);
    setBlueTeam([]);
    setModalOpen(false);
  }

  return (
    <>
    <div id="wrap">
      <h1>강한 주사위 대결</h1>
      <h2>~ 주사위라면 6이 잘 나와야 하는 법 ~</h2>
      <p>우선 팀을 골라주세요.<br />주사위 굴리기 버튼을 누르면 자동으로 주사위를 굴립니다.<br />주사위를 총 15번 던질 동안 6이 3번 먼저 나오는 팀이 이깁니다.<br />
      만약 6이 잘 안 나와서 승부가 나질 않았다면,<br />
      그동안 나온 주사위 눈의 총합이 더 높은 팀이 이깁니다.</p>
      <span>그럴 일은 거의 없겠지만 주사위의 총합마저 무승부가 나왔다면 다시 게임을 합시다.</span>
      <div id="container">
        <div className="btn">
        <Button onClick={playClick}>주사위굴리기</Button>
        </div>
        <p>주사위 굴린 횟수: {diceNum}</p>
        <div id="red">
          <Team name="Red" color="red" DiceHistory={redTeam} />
        </div>
        <div id="blue">
          <Team name="Blue" color="blue" DiceHistory={blueTeam} />
        </div>
      </div>
    </div>
    <div id="modal" style={{display: modalOpen ? "block" : "none" }}>
      <p>
      <h3>결 과</h3>
      {Winner !== "무승부" ? (
      <span><b style={{color:fontColor}}>{Winner}</b> 팀 승리!</span>
    ) : (
      <span>{Winner}입니다!</span>
    )}
      <Button onClick={resetGame}>다시 하기</Button>
      <Button onClick={closeModal}><i class="fa-solid fa-x"></i></Button>
      </p>
    </div>
    </>
  )
}