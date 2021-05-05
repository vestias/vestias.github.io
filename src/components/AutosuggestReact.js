import React from 'react';
import Autosuggest from 'react-autosuggest';

  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value,tab) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp('^' + escapedValue, 'i');
    return tab.filter(tab => regex.test(tab.name));
  }
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }
  
  class AutosuggestReact extends React.Component {
    
    placeholder = "";
    
    constructor(props) {
      super();
      this.placeholder = props.placeholder;
      this.state = {
        value: '',
        suggestions: [],

      };
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value,this.props.data)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    shouldRenderSuggestions = () => {
      return true;
    };
  
    storeInputReference = autosuggest => {
      if (autosuggest !== null) {
        this.input = autosuggest.input;
      }
    }
  
    onButtonClick = () => {
      this.input.focus();
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: this.placeholder,
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        ref={this.storeInputReference}
      />
      );
    }
  }
  
 
export default AutosuggestReact;