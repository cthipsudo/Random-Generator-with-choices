import React, { Component } from 'react';
import STORE from './questionsStore';
import gameFunctions from './gameFunctions';
import questions from './questionsStore';

export default class Dataholder extends Component {
    state = {
        questions: [],
        character: {
            class: 'thief',
            race: 'goblin'
        }
    }

    componentDidMount() {
        let shuffledStore = STORE[1]
        //Shuffle the questions that can be shuffled
        shuffledStore = gameFunctions.shuffle(shuffledStore);
        //Grab the first offical question
        let newQuestionBase = [STORE[0][0]];

        for (let i = 0; i < shuffledStore.length; i++) {
            for (let j = 0; j < shuffledStore[i].length; j++) {
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

    setCharacter = (character) => {
        console.log(character);
        const characterData = character.split(' ');
        const newCharacter = {
            race: characterData[0],
            class: characterData[1]
        }

        this.setState({
            character: Object.assign(newCharacter)
        })

    }
    render() {
        const data = this.state.questions.map((question, index) => {
            //console.log(question);
            let choices = question.choices;
            const charRace = this.state.character.race;
            const charClass = this.state.character.class;
            //Make a blank array for choices if doesn't exist
            if (!question.choices) {
                choices = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']
            };

            const buttons = gameFunctions.grabChoices(choices, charRace, charClass).map((choice, index) => {
                return <button key={index + choice}> {choice} </button>
            });
            return <div key={index + question}>
                <p>{question.question}</p>
                {buttons}
            </div>
        })

        return (
            <div>
                <label htmlFor="characterSelector">Choose a race and class:</label>

                <select name="characterSelector" id="characterSelector" onChange={(e) => this.setCharacter(e.target.value)}>
                    <option value="goblin wizard">Goblin Wizard</option>
                    <option value="goblin thief">Goblin Thief</option>
                    <option value="goblin warrior">Goblin Warrior</option>
                    <option value="human wizard">Human Wizard</option>
                    <option value="human thief">Human Thief</option>
                    <option value="human warrior">Human Warrior</option>
                    <option value="alien wizard">Alien Wizard</option>
                    <option value="alien thief">Alien Thief</option>
                    <option value="alien warrior">Alien Warrior</option>
                </select>
                {data}
            </div>
        )
    }
}
