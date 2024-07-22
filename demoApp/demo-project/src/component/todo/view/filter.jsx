import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilter } from '../redux/actions'

const { Search } = Input;

export default function Filters() {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    // console.log('Filter Change: '+  e.target.value )
    setFilter(e.target.value)
    dispatch(searchFilter(e.target.value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <p style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Search</p>
        <Search placeholder='input search text' value={filter} onChange={handleFilterChange} />
      </Col>

      <Col sm={24}>
        <p style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </p>
        <Radio.Group>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <p style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
        </p>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
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
      </Col>
    </Row>
  );
}