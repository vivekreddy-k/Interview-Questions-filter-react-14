// Write you Code here
import './index.css'
import {Component} from 'react'

const upArrow = 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
const downArrow = 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'

class InterviewQuestion extends Component {
  state = {
    isAnswerHidden: false,
  }

  /* to toggle show answer button on clicking  */
  onClickToggle = () => {
    this.setState(prevState => ({isAnswerHidden: !prevState.isAnswerHidden}))
  }

  /* to get the answer text  */
  renderAnswer = () => {
    const {question} = this.props
    const {answerText} = question
    const {isAnswerHidden} = this.state
    if (isAnswerHidden) {
      return <p className="answer-text">{answerText}</p>
    }
    return null
  }

  /** to set class name for each easy, medium and hard level filters */
  renderDifficultyLevelClassName = () => {
    const {question} = this.props
    const {difficultyLevel} = question
    let selectedDifficultyLevel
    if (difficultyLevel === 'EASY') {
      selectedDifficultyLevel = 'easy-level'
    } else if (difficultyLevel === 'MEDIUM') {
      selectedDifficultyLevel = 'medium-level'
    } else if (difficultyLevel === 'HARD') {
      selectedDifficultyLevel = 'hard-level'
    }
    return selectedDifficultyLevel
  }

  /** to set the class name for each unique language  */
  renderLanguageClassName = () => {
    const {question} = this.props
    const {language} = question
    let selectedLanguage
    if (language === 'HTML') {
      selectedLanguage = 'language-html'
    } else if (language === 'CSS') {
      selectedLanguage = 'language-css'
    } else if (language === 'JAVASCRIPT') {
      selectedLanguage = 'language-js'
    }
    return selectedLanguage
  }

  render() {
    const {isAnswerHidden} = this.state
    const {question} = this.props
    const {questionText, difficultyLevel, language} = question
    const imageURL = isAnswerHidden ? upArrow : downArrow
    const altText = isAnswerHidden ? 'up arrow' : 'down arrow'
    return (
      <div className="questions-container-item">
        <div className="filters-section">
          <span
            className={`${this.renderDifficultyLevelClassName()} filter-text`}
          >
            {difficultyLevel}
          </span>
          <span className={`${this.renderLanguageClassName()} filter-text`}>
            {language}
          </span>
        </div>
        <h1 className="question-text">{questionText}</h1>
        <button
          className="answer-button"
          type="button"
          onClick={this.onClickToggle}
        >
          {isAnswerHidden ? 'Hide' : 'Show'}
          <img src={imageURL} className="button-image" alt={altText} />
        </button>
        {this.renderAnswer()}
      </div>
    )
  }
}

export default InterviewQuestion
