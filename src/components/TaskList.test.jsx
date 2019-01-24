import React from 'react';
import { shallow, mount } from 'enzyme';
import { TaskList } from './TaskList';

it('adds a new task to state correctly', () => {
  const wrapper = mount(<TaskList />);
  wrapper.instance().newTask("New task");
  expect(wrapper.instance().state.taskList).toEqual(["New task"]);
});

it('deletes a task correctly', () => {
  const wrapper = mount(<TaskList />);
  wrapper.instance().newTask("New task");
  wrapper.instance().deleteTask(0);
  expect(wrapper.instance().state.taskList).toEqual([]);
});

it('deletes a task in the middle somewhere correctly', () => {
  const wrapper = shallow(<TaskList />);
  wrapper.instance().state.taskList = ["Task 1", "Task 2", "Task 3", "Task 4"];
  wrapper.instance().deleteTask(2);
  expect(wrapper.instance().state.taskList).toEqual(["Task 1", "Task 2", "Task 4"]);
});
