import './App.css';
import { DraggableBlockList } from './components/DraggableBlockList';

export const App = () => {
  return (
    <>
      <h1 className='header'>Drag and drop list</h1>
      <DraggableBlockList />
    </>
  );
};
