import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { Typography } from 'antd';


import './App.css';

const { Title } = Typography;

function App() {
  return (
    <div className="App">

      <Title>Konstanta 56</Title>

      <Form
        onValuesChange={() => { }}
      >
        <Form.Item label="Длина">
          <Input placeholder="Введите длину" />
        </Form.Item>
        <Form.Item label="Ширина">
          <Input placeholder="Введите ширину" />
        </Form.Item>
        <Form.Item >
          <Button type="primary">Рассчитать</Button>
        </Form.Item>
      </Form>

    </div>
  );
}

export default App;
