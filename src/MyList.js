import { Component } from 'react';
import cart from './done.jpg'

export class MyList extends Component {
state = {

userInput:'',

myList: []
}

onChangeEvent(e){

this.setState({userInput: e});
}

addItem(input){
if (input === ''){
alert ("Please type a note")
} else {

let listArray = this.state.myList;
listArray.push(input);
this.setState({myList: listArray, userInput: '' })
}}

deleteItem() {
let listArray = this.state.myList;
listArray = [];
this.setState({myList: listArray})
}

crossedWord(event) {
const li = event.target;
li.classList.toggle('crossed')
}

onFormSubmit(e){
e.preventDefault();
}

render() {
return(

<div>
<form onSubmit={this.onFormSubmit}>
<div class="container">

<input type="text"
placeholder="I have to do..."

onChange={(e) => {this.onChangeEvent(e.target.value)}}

value={this.state.userInput}/>
</div>

<div class="container">
<button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>
</div>
            
<ul>
{this.state.myList.map((item, index) => (
<li onClick={this.crossedWord} key={index}>
<img src={cart} width="40px" alt="check"/>
{item}</li>
))}
</ul>
<div class="container">
<button onClick={() => this.deleteItem()}className="delete">Delete</button>
</div>
</form>
</div>
        )
    }
}