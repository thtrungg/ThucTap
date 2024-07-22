import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../view/todo';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function TodoList() {

    const [todoName, settodoName] = useState()
    const [priority, setPriority] = useState('High')

    const dispatch = useDispatch()

    const todoList = useSelector((state) => state.todolist)

    const searchText = useSelector((state) => state.fillter.search)

    const todoRemaining = todoList.filter((todo) =>
        todo.name.includes(searchText)
    );

    console.log({todoList,searchText})

    const handleClick = () => {
        if(todoName && todoName.trim() !== ''){
            dispatch(addTodo({
                id : uuidv4(),
                name : todoName,
                completed: false,
                priority: priority,
            }
            ));
            settodoName('')
            setPriority('High')
        } else{
            alert('nhập công việc cần làm');
        }
    }

    const handleInputChange = (e) => {
        // console.log('handleInputChange: '+  e.target.value )
        settodoName(e.target.value)
    }

    const handlePriorityChange = (value) => {
        // console.log(value)
        setPriority(value)
    }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>

      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
             {todoRemaining.map((todo) => 
                    <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                )}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>

            <Input value={todoName} onChange={handleInputChange} />

            <Select defaultValue="High" value={priority} onChange={handlePriorityChange}>
                <Select.Option value='High' label='High'>
                    <Tag color='red'>High</Tag>
                </Select.Option>
                <Select.Option value='Medium' label='Medium'>
                    <Tag color='blue'>Medium</Tag>
                </Select.Option>
                <Select.Option value='Low' label='Low'>
                    <Tag color='gray'>Low</Tag>
                </Select.Option>
            </Select>

            <Button type='primary' onClick={handleClick}>
            Add
            </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}