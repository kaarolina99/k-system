import './App.css';
import {QueueGrid} from '../queue_component/App';
import { FormsGrid } from '../forms_component/App';




export default function MyApp() {
  return (
    <div> 
      <h1>Welcome to my app</h1>
      <QueueGrid/>
      <FormsGrid/>
    </div>
  );
}


