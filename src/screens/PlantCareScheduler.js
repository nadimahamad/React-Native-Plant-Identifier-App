// PlantCareScheduler.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

const PlantCareScheduler = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { id: Date.now().toString(), task: newTask }]);
      setNewTask('');
    }
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.task}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plant Care Scheduler</Text>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Enter a care task"
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  taskContainer: {
    backgroundColor: '#FFF',
    padding: 12,
    marginVertical: 4,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  taskList: {
    marginTop: 16,
  },
});

export default PlantCareScheduler;
