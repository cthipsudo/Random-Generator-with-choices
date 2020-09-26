import React, { Component } from 'react';
import STORE from './questionsStore';
import gameFunctions from './gameFunctions';

export default class Dataholder extends Component {
    state = {
        questions: [],
    }

    componentDidMount() {
        let shuffledStore = STORE[1]
        //Shuffle the questions that can be shuffled
        shuffledStore = gameFunctions.shuffle(shuffledStore);
        //Grab the first offical question
        let newQuestionBase= [STORE[0][0]];

        for(let i = 0; i < shuffledStore.length; i++){
            for(let j = 0; j < shuffledStore[i].length; j++){
                newQuestionBase.push(shuffledStore[i][j]);
            }
        }
        //Add the last offical question
        newQuestionBase = [...newQuestionBase, STORE[2][0]]

        //console.log(newQuestionBase);
        this.setState({
            questions: newQuestionBase,
        });
        
    }


    render() {
        const data = this.state.questions.map((question, index) => {
            //console.log(question);
            let choices = question.choices;

            //Make a blank array for choices if doesn't exist
            if(!question.choices){
                choices = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']
            };

            const buttons = choices.map((choice, index) => {
                return <button key={index + choice}> {choice} </button>
            });
            return <div key={index + question}>
                <p>{question.question}</p>
                {buttons}
            </div>
        })

        return (
            <div>
                {data}
            </div>
        )
    }
}
