import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import InlineStyles from './components/InlineStyles';
import './appStyles.css';
import styles from './appStyles.modules.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import ForwardRefParentInput from './components/ForwardRefParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import HookCounter from './components/HookCounter';
import UseEffectDemo from './components/UseEffectDemo';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Hello World.
        </p>
        <Greet name='Kobe' amplua='point guard'>
          <p>This is children props</p>
        </Greet>
        <Greet name='Michael' amplua='forward'>
          <button>Action</button>
        </Greet>
        <Greet name='Shaq' amplua='center'/>
        <Welcome />
        <Hello />
        <Message />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent />
        <UserGreeting />
        <NameList />
        <Stylesheet />
        <InlineStyles />
        <Form />
        <LifecycleA />  
        <FragmentDemo />
        <Table />
        <PureComp />
        <RefsDemo />
        <ForwardRefParentInput />
        <PortalDemo />
        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>
        <ClickCounter />
        <UserProvider value='Chino'>
          <ComponentC/>
        </UserProvider>
        {/* <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary> */}
        <PostList />
        <HookCounter />
        <UseEffectDemo />
        <HookMouse/>
        <a
          className="App-link"
          href="https://eurosport.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Eurosport
        </a>
        <h3 className='error'>Error</h3>
        <h3 className='success'>Success</h3>
      </header>
    </div>
  );
}

export default App;
