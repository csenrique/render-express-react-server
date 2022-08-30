const React = require('react');

class App extends React.Component {


    handleClick() {
        console.log('CLICK');
    }

    render() {

        return (
            //React.createElement('h1', null, 'Hola Mundo con React')
            <div>
                <h1>Hola Mundo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates id corporis iusto quam minus vero architecto hic laborum ad, ab odit quos maiores inventore fugiat. Natus, obcaecati? Odit, molestiae?</p>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

module.exports = App;