import { ListGroup} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import HabitDetails from './HabitDetails'
import { useDispatch } from 'react-redux'
import { deleteHabit } from '../features/habitsSlice'
const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits)
     // deleteHabit Handler
     const dispatch = useDispatch()
     const deleteHandler = (name) => {
      dispatch(deleteHabit(name))
    }
  return (
    <div className='mt-4 '>
      
      {habits.map((habit, index) => (
        
          <ListGroup.Item key={index} className='mb-3 rounded gradient1'>
            <p>
              <strong>{habit.title}</strong>&nbsp; :&nbsp; <i>{habit.description}</i>
              <i
                  className='fa-solid fa-trash fail'
                  style={{ fontSize: '12px', float: 'inline-end' }}
                  onClick={() => deleteHandler(habit.id)}></i>
            </p>

            <HabitDetails key={habit.title}  habit={habit} />
           
          </ListGroup.Item>
      
      ))}
    </div>
  )
}

export default HabitDisplay
