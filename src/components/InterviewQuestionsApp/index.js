// Write you Code here
import './index.css'
import {Component} from 'react'
import InterviewQuestion from '../InterviewQuestion'
import Filters from '../Filters'

let filteredData
class InterviewQuestionsApp extends Component {
  state = {
    activeLanguage: 'ALL',
    activeDifficultyLevel: 'ALL',
  }

  onChangeDifficulty = difficultyLevelValue => {
    this.setState({activeDifficultyLevel: difficultyLevelValue})
  }

  onChangeLanguage = languageValue => {
    this.setState({activeLanguage: languageValue})
  }

  getFilteredData = () => {
    const {questionsData} = this.props
    const {activeLanguage, activeDifficultyLevel} = this.state

    if (activeLanguage === 'ALL' && activeDifficultyLevel === 'ALL') {
      filteredData = questionsData
    } else if (activeLanguage === 'ALL' && activeDifficultyLevel !== 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.difficultyLevel === activeDifficultyLevel,
      )
    } else if (activeLanguage !== 'ALL' && activeDifficultyLevel === 'ALL') {
      filteredData = questionsData.filter(
        eachQuestion => eachQuestion.language === activeLanguage,
      )
    } else {
      filteredData = questionsData.filter(
        eachQuestion =>
          eachQuestion.language === activeLanguage &&
          eachQuestion.difficultyLevel === activeDifficultyLevel,
      )
    }
    return filteredData
  }

  render() {
    const {levelsData, languageData} = this.props
    const {activeDifficultyLevel, activeLanguage} = this.state
    const filteredQuestionsData = this.getFilteredData()
    console.log(activeDifficultyLevel, activeLanguage)
    console.log(this.getFilteredData())

    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="header-heading">30 Seconds of Interviews</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="interview-img"
            className="header-image"
          />
        </div>
        <div className="body-container">
          <Filters
            languageData={languageData}
            levelsData={levelsData}
            onChangeDifficulty={this.onChangeDifficulty}
            onChangeLanguage={this.onChangeLanguage}
          />
          <div className="question-container">
            {filteredQuestionsData.map(eachQuestion => (
              <InterviewQuestion
                key={eachQuestion.id}
                question={eachQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default InterviewQuestionsApp
