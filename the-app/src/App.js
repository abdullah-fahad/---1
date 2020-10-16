import React from 'react';
import { render } from 'react-dom';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      content: '',
      tranzilation: '',
      error: ''
    }
  }
  onSubmit(e){
    e.preventDefault();
    if(this.state.content === '')
    {this.setState({error: "لايمكن ترجمة كود مصدري فارغ"})}
    else
    {axios.post('/tran',{"code": `${this.state.content}`})
    .then(res =>{
      this.setState({tranzilation: res.data.message})
      console.log();
    }).catch(err => {
      this.setState({error: "هناك خطأ" + err})
    });
  }}
    

  render() {
    return (
      <div>
        <div className="header">
          <p className="p">CIA | تطبيق البرمجة بالعربي</p>
        </div>
        <br />
        <div className="div">
    <div>{this.state.error===''?<h3> </h3>:<h3 className="h3">{this.state.error}</h3>}</div>
        <textarea value={this.state.content} onChange={(e)=>{this.setState({content: e.target.value, error:''})}} className="textarea" placeholder="الكود المصدري(العربي)"></textarea><br />
        <button onClick={this.onSubmit} className="primary">ترجمة</button>
        <button onClick={()=>{this.setState({content: '',error: '',tranzilation: ''});}} className="danger">حذف</button><br />
         <textarea value={this.state.tranzilation}  className="tranzilatearea"></textarea>
        </div>
      </div>
    );
 } 
}
export default App;
render(<App />, document.getElementById('root'));