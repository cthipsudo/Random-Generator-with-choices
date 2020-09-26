import React, { Component } from 'react';

const store = [['a'], [['b1','b2', 'b3'], ['c1','c2', 'c3'], ['d1','d2', 'd3'], ['e1','e2', 'e3', 'e4'], ['f1','f2', 'f3', 'f4', 'f5'], ['g1','g2', 'g3'], ['h1','h2', 'h3'], ['i1','i2', 'i3', 'i4'], ['j1','j2', 'j3']], ['k']];
export default class Dataholder extends Component {
    state = {
        questions: [],
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    componentDidMount() {
        let newStore = store[1]
        newStore = this.shuffle(newStore);
        let newQuestionBase= [store[0]];
        for(let i = 0; i < newStore.length; i++){
            for(let j = 0; j < newStore[i].length; j++){
                newQuestionBase.push(newStore[i][j]);
            }
        }
        newQuestionBase = [...newQuestionBase, store[2]]

        this.setState({
            questions: newQuestionBase,
        });
        
    }
    render() {
        const data = this.state.questions.map(question => {
            return <p>{question}</p>
        })
        return (
            <div>
                {data}
            </div>
        )
    }
}
