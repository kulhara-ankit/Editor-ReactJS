import {Component} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  InputContainer,
  InputField,
  ParagraphText,
  Button,
} from './styledComponent'

class EditorBox extends Component {
  state = {isEdited: '', isButtonClicked: false}

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  onChangeInput = event => {
    this.setState({isEdited: event.target.value})
  }

  render() {
    const {isEdited, isButtonClicked} = this.state
    const editOrSaveButton = isButtonClicked ? 'Edit' : 'Save'

    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <ParagraphText>{isEdited}</ParagraphText>
            ) : (
              <InputField
                onChange={this.onChangeInput}
                value={isEdited}
                type="text"
              />
            )}

            <Button onClick={this.onClickButton}>{editOrSaveButton}</Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default EditorBox
