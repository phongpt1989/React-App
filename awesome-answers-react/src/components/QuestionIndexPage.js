import React from 'react';
import Field from './Field';
import questionsData from '../questionsData';

// The React Component parent class is also available
// as a property of the React default import object.
class QuestionIndexPage extends React.Component {
  render() {
    return (<main className="QuestionIndexPage" style={{
        margin: '0 1rem'
      }}>
      <h2>Questions</h2>
      <ul>
        {
          questionsData.map(question => (<li key={question.id}>
            <a href="">{question.title}</a>
            <Field name="Author" value={question.author.full_name}/>
          </li>))
        }
      </ul>
    </main>)
  }
}

export default QuestionIndexPage;
