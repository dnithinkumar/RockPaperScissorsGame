import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImgContainer,
  PlayerText,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResult = props => {
  const {myChoice, apponentChoice, resultMessage, playAgain} = props
  // eslint-disable-next-line no-unused-vars
  const {id, image} = apponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <ShowResultContainer>
      <ResultImagesContainer>
        <ResultTextImgContainer>
          <PlayerText>YOU</PlayerText>
          <ResultImageItem src={myChoice[1]} alt="your choice" />
        </ResultTextImgContainer>
        <ResultTextImgContainer>
          <PlayerText>OPPONENT</PlayerText>
          <ResultImageItem src={image} alt="opponent choice" />
        </ResultTextImgContainer>
      </ResultImagesContainer>
      <ResultText>{resultMessage}</ResultText>
      <ResultButtonContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </PlayAgainButton>
      </ResultButtonContainer>
    </ShowResultContainer>
  )
}

export default GameResult
