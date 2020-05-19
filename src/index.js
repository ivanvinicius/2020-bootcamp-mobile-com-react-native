import React, { useEffect, useState } from 'react';
import  { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, [])

  /** Posso utilizar async await também */
  function handleAddProject() {
    const newProject = { 
      title: 'Novo projeto com NextJs', 
      owner: 'Ivan Vinicius Boneti' 
    };

    api.post('projects', newProject).then(response => {
      const projectCreated = response.data;

      setProjects([...projects, projectCreated]);
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      
      <SafeAreaView style={style.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={style.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity 
          onPress={handleAddProject} 
          activeOpacity={0.8} 
          style={style.button} 
        >
          <Text style={style.buttonText}>Add Project</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  
  project: {
    color: '#fff',
    fontSize: 28,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
