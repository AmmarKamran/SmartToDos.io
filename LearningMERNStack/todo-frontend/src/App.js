import React, {useState, useEffect, Component} from 'react'
// import ReactDOM, { render } from 'react-dom';
// import Dropdown from './dropdownmenu/Dropdown.js';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import $ from 'jquery'; 
// import { Button, Progress } from 'semantic-ui-react'
// for side bar, the following 2 imports are for the animatedside bar
import { Container } from "semantic-ui-react";
import Example from "./example";
// import {
//   Checkbox,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Menu,
//   Segment,
//   Sidebar,
// } from 'semantic-ui-react'


var counter = 0;
var prevDiv;
var prevParent;
const CalculateTaskProgress = async () => {
  counter++;
  // we'll make 2 Get requests here. First, to find total number of tasks and then to find the number of compelted tasks.
  // second request
  const res2 = await fetch('http://localhost:3001/todosTaskCompletedCount');
  // await console.log("CalculateTaskProgress totalTaskCompletedCount is ", await res2.json());
  totalTaskCompletedCount =  await res2.json();
  
  //first fetch request goes here:
  const res = await fetch('http://localhost:3001/todosTaskCount');
  // await console.log("CalculateTaskProgress totalTaskCount is ", await res.json());
  totalTaskCount =  await res.json() ;
  // settotalTaskCount(totalTaskCount);
  // settotalTaskCompletedCount(totalTaskCompletedCount);
  // return {
  //   'totalTaskCount': totalTaskCount, 'totalTaskCompletedCount': totalTaskCompletedCount
  // }
  console.log(totalTaskCompletedCount, "out of ", totalTaskCount)




  var myCoolDiv = document.createElement("div");
myCoolDiv.id = "MyCoolDiv";
myCoolDiv.style.color = "#2b0808";
var child =   document.createTextNode(totalTaskCompletedCount+ " out of "+ totalTaskCount + " Tasks Completed - You're " + 100*totalTaskCompletedCount/totalTaskCount + " % done!");
child.textAlign = 'center';
child.color = 'green'
myCoolDiv.appendChild(
  child
);
document.getElementById("playerContainer").appendChild(myCoolDiv);

setTimeout(function(){ 
    // No need for this, we already have it from the above:
    // var myCoolDiv = document.getElementById("MyCoolDiv");
    document.getElementById("playerContainer").removeChild(myCoolDiv);
}, 1500);






  // var div = document.createElement("div");
  // div.innerHTML = totalTaskCompletedCount + ' out of ' + totalTaskCount + ' Tasks Completed!';
  // if (prevDiv) {
  //   prevDiv.parentNode.removeChild(prevDiv);
  // } // if it does not exist, 
  // prevDiv = div
  // // prevParent = document.body;
  // document.body.appendChild(div);
  // // document.body.appendChild(div);
  // // document.body.appendChild(div);

  // console.log('done')
  // document.body.removeChild(div);
};


// function App() {
  class App extends Component {
    render() {
  return (
    <div>
    <Container style={{ margin: 20 }}>
      <List />
    </Container>

    <Container style={{ margin: 20 }}>
      <AdditionalContainer />
    </Container>

    <Container style={{ margin: 20 }}>
      <Example />
    </Container>

    </div>
  ) }
}

let totalTaskCount = 0;
let totalTaskCompletedCount = 0;

// const Example = () => {
//   const [visible, setVisible] = React.useState(false)

//   return (
//     <div>
//       <Grid columns={1}>
//       <Grid.Column>
//         <Checkbox
//           checked={visible}
//           label={{ children: <code>visible</code> }}
//           onChange={(e, data) => setVisible(data.checked)}
//         />
//       </Grid.Column>

//       <Grid.Column>
//         <Sidebar.Pushable as={Segment}>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             direction='left'
//             icon='labeled'
//             inverted
//             onHide={() => setVisible(false)}
//             vertical
//             // visible={false}
//             visible={visible}
//             width='thin'
//           >
//             <Menu.Item as='a'>
//               <Icon name='home' />
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//           </Sidebar>

//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             direction='right'
//             inverted
//             vertical
//             // visible={true}
//             visible={visible}
//           >
//             <Menu.Item as='a' header>
//               File Permissions
//             </Menu.Item>
//             <Menu.Item as='a'>Share on Social</Menu.Item>
//             <Menu.Item as='a'>Share by E-mail</Menu.Item>
//             <Menu.Item as='a'>Edit Permissions</Menu.Item>
//             <Menu.Item as='a'>Delete Permanently</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher>
//             <Segment basic>
//               <Header as='h3'>Application Content</Header>
//               <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
//             </Segment>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Grid.Column>
//     </Grid>
//     </div>
//   )

// }














const AdditionalContainer = () => {
  // const [todos, setTodos] = useState([]);
  // var [totalTaskCount, settotalTaskCount] = useState([]);
  // var [totalTaskCompletedCount, settotalTaskCompletedCount] = useState([]);
  // const [text, setText] = useState([]);
  // const [date, setDate] = useState([]);
  // const [category, setCategory] = useState([]);
  return (
    <div>
  <div className="ui horizontal divider" style={{'marginTop':'50px'}}>Your Progress</div>
  <div class="ui animated fade inverted orange button" tabindex="0" style={{display:'block', marginLeft:'auto', marginRight:'auto'}} onClick={CalculateTaskProgress}>
      <div class="visible content" onClick={CalculateTaskProgress}>Calculate Your Progress</div>
      <i class="hidden content">
        Drumroll please...
      </i>
    </div>
    <div id="playerContainer"  className="label" style={{display:'block', marginLeft:'auto', marginRight:'auto'}}> </div>


  <div className="ui active progress" data-value="57" data-total="200" data-percent="57" width="57%" style={{"transitionDuration": "200ms", "width": "100%"}}>
    <div className="bar" style={{color:"green"}}>
      <div className="progress">6%</div>
      {/* <Progress percent={25} /> */}
    </div>

    <div className="ui indicating progress success" data-value="1" data-total="200" id="example5" data-percent="100">
            <div className="bar" style={{"transitionDuration": "200ms", "width": "100%"}}>
              <div className="progress">100%</div>
            </div>
    </div> 

</div>
<div className="label" style={{'textAlign':'center'}}>Task Completion in Progress... We've got some work to do!</div>
<div className="ui horizontal divider" style={{'marginTop':'50px'}}>Additional Features to Potentially Add</div>
<button className="ui teal right labeled icon button" >
<ul style={{textAlign: 'left'}}>
  <li>Drop down menu of Categories</li>
  <li>Priority Tags (High, Medium, Low)</li>
  <li>Live Progress Bar</li>
  <li>Transposed Task View - organizing tasks: alphabetically, based on priority, based on date, based on tag</li>
</ul>
</button>
</div>
  )
};

























// The two functions below are how we use a GET function from the backend 
// to display them onto our FRONT END BOOM ------------------------------------------------
const List = () => {
  const [todos, setTodos] = useState([]);
  var [totalTaskCount, settotalTaskCount] = useState([]);
  var [totalTaskCompletedCount, settotalTaskCompletedCount] = useState([]);
  const [text, setText] = useState([]);
  const [date, setDate] = useState([]);
  const [category, setCategory] = useState([]);

// makeAjax request to FETCH TODOS counts ===================
    const fetchTodoCountsOfCompletedAndTotal = async () => {
      // we'll make 2 Get requests here. First, to find total number of tasks and then to find the number of compelted tasks.
      // second request
      const res2 = await fetch('http://localhost:3001/todosTaskCompletedCount');
      await console.log("totalTaskCompletedCount is ", await res2.json());
      totalTaskCompletedCount =  res2;
      
      //first fetch request goes here:
      const res = await fetch('http://localhost:3001/todosTaskCount');
      await console.log("totalTaskCount is ", await res.json());
      totalTaskCount =  res ;
      // settotalTaskCount(totalTaskCount);
      // settotalTaskCompletedCount(totalTaskCompletedCount);
      return {
        'totalTaskCount': totalTaskCount, 'totalTaskCompletedCount': totalTaskCompletedCount
      }
    };

  // makeAjax request to FETCH TODOS ===================
  const fetchTodos = async () => {
    //fetch request goes here:
    fetchTodoCountsOfCompletedAndTotal();
    const res = await fetch('http://localhost:3001/todos');
    setTodos(await res.json()); // turn response into json
  };

  // makeAjax request to Add TODOS -- onclick ===================
  const addTodo = async () => {
    //fetch request goes here:
    if (!text || !date || !category ) {
      alert('Task cannot be added until you fill in name, category, and date');
      return;
    } else {
      const res = await fetch('http://localhost:3001/todos', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ desc: text, done: false, due: date, tag: category})
      }
    );
    // currently, after we add a TODO, we must manuallly referesh our page to see the new Todos.
    // We'll insert the following lines in order to have a an aut-refers
    // assume the todo is successfully added a(and dont do any errro hadnling)
    fetchTodos(); // this wil fetch them and reflect them ont othe scren
    settotalTaskCount(totalTaskCount);
    setText('');
  }};

    // // deleteAllTodos
    const deleteAllTodos = async () => {
      await fetch(`http://localhost:3001/todos`, {
        method:'DELETE'
      });
      fetchTodos();
    }

    const StartTemplateToDoList = async () => {
      deleteAllTodos();
      await fetch(`http://localhost:3001/todos/standardTemplate`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchTodos();
    }

  useEffect(() => {
    fetchTodos();
  }, []);

  const items = todos.map(todo => <Item todo={todo} key={todo._id} fetchTodos={fetchTodos}/> )
  
  // drop down variables
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

// used to be ui centered card
  return <div className="ui segment" styles={{'padding-left':'100px'}}>
  <div className="content" styles={{'width':'1600px'}}>
    <h1 style={{'textAlign':'center'}}>My To-Do List</h1>
    {/* <div className="header">My To-Do List</div> */}
    <div style={{'display':'block', 'marginLeft':'auto', 'marginRight': 'auto' }}>
        <button className="positive ui button" onClick={StartTemplateToDoList} style={{'display':'block', 'marginLeft':'auto', 'marginRight': 'auto' }}>Start Standardized ToDo List</button>
        <button className="negative ui button" onClick={deleteAllTodos} style={{'display':'block', 'marginLeft':'auto', 'marginRight': 'auto', 'marginTop': '5px', 'marginBottom': '5px' }}>Clear & Start Afresh</button>
    </div>
    
  </div>
  <div className="content" styles={{'width':'1600px'}}>

    <div className="ui relaxed divided list" styles={{'width':'1600px'}}>
      {items}
    </div>
  </div>

  <div className="ui horizontal divider" style={{'marginTop':'50px'}}>Add More Tasks</div>
  <div className="extra content" style={{display:'flex',   'alignItems': 'center', 'justifyContent': 'center'}}>
    <div className="fluid ui action input">
          <div className="ui cards">
            <div className="card">
            <button className="ui teal right labeled icon button" >
                {/* <List style={{color:"blue"}}> */}
                <input type="text" value={text} onChange={(e) => 
                  setText(e.target.value)} 
                  placeholder="Task Name"/>
                    {/* <br></br> */}
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Task Category"/>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> 
                  {/* </List> */}
            </button>

            
                  </div>
                {/* </div> */}

              
          </div>
      <button className="ui teal right labeled icon button" onClick={addTodo}><i className="plus icon"></i>add</button>
    </div>
  </div>

</div>

};
// const CalculateTaskProgress = (props) => {
//   totalTaskCount = props.todo;

// }














const Item = (props) => {
  const {done , desc, _id, tag, due} = props.todo;
  const deleteTodo = async () => {
    await fetch(`http://localhost:3001/todos/${_id}`, {
      method:'DELETE'
    }
    );
    props.fetchTodos();
  }

  const toggleDone = async () => {
    await fetch(`http://localhost:3001/todos/${_id}`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: !done, desc, due, tag})
    });

    props.fetchTodos();
  };


  return <div className='item'>
    {
      done ? 
      <i className="left floated green check square outline icon" onClick={toggleDone}></i> : 
      <i className="left floated square outline icon" onClick={toggleDone}></i>
    }
    {
      done ?
      <del > {desc}</del> :  <p > {desc}</p>
    }
    {/* {totalTaskCount} */}
    {/* {done} */}
    <i className="right floated red trash icon" onClick={deleteTodo} style={{height:"10px"}} ></i>
    <a className="right floated ui basic image label" style={{'marginRight':"13px"}}><i className="blue calendar icon" style={{'marginRight':"20px"}}/>{due}</a>
    { (tag == "Academics") ?
          <button a className="right floated ui teal tag label"  style={{"marginRight": "10px"}} >{tag}</button> :
          (tag == "Career") ?
          <button a className="right floated ui orange tag label"  style={{"marginRight": "10px"}} >{tag}</button> :
          (tag == "Finance") ?
          <button a className="right floated ui pink tag label"  style={{"marginRight": "10px"}} >{tag}</button> :
          (tag == "Community") ?
          <button a className="right floated ui purple tag label"  style={{"marginRight": "10px"}} >{tag}</button> :
          (tag == "Home") ?
          <button a className="right floated ui blue tag label"  style={{"marginRight": "10px"}} >{tag}</button> :
          <button a className="right floated ui green tag label"  style={{"marginRight": "10px"}} >{tag}</button>
    }
    
     
    {/* <button a className="right floated ui teal tag label"  style={{"marginRight": "10px"}} >{tag}</button> */}

  </div>
}

//  ------------------------------------------------ ------------------------------------------------



export default App;
