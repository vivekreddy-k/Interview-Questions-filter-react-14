// Write you Code here
import './index.css'
import {Component} from 'react'

class Filters extends Component {
  /* to render language options */
  /* option has className, key , value  */
  renderLanguageOption = () => {
    const {languageData} = this.props
    return languageData.map(eachItem => (
      <option
        key={eachItem.id}
        value={eachItem.language}
        className="filter-option"
      >
        {eachItem.language}
      </option>
    ))
  }

  /* to render difficulty level options */
  /* option has className, key , value  */
  renderDifficultyLevelOption = () => {
    const {levelsData} = this.props
    return levelsData.map(eachItem => (
      <option
        key={eachItem.id}
        className="filter-option"
        value={eachItem.level}
      >
        {eachItem.level}
      </option>
    ))
  }

  onChangeDifficultyOption = event => {
    const {onChangeDifficulty} = this.props
    const difficultyLevelValue = event.target.value
    onChangeDifficulty(difficultyLevelValue)
  }

  onChangeLanguageOption = event => {
    const {onChangeLanguage} = this.props
    const languageValue = event.target.value
    onChangeLanguage(languageValue)
  }

  /* main render application */
  render() {
    return (
      <div className="filter-container">
        <div className="filter-item">
          {/** label item and select item for drop down option */}
          {/* a select option should have options below it and onChange event 
           htmlFor is needed for label */}
          <label className="filter-item-heading" htmlFor="language">
            Language
          </label>
          <select
            className="filter-select-item"
            onChange={this.onChangeLanguageOption}
          >
            {this.renderLanguageOption()}
          </select>
        </div>
        <div className="filter-item">
          <label className="filter-item-heading" htmlFor="difficulty-level">
            Difficulty Level
          </label>
          <select
            className="filter-select-item"
            onChange={this.onChangeDifficultyOption}
          >
            {this.renderDifficultyLevelOption()}
          </select>
        </div>
      </div>
    )
  }
}

export default Filters
