import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import './styles.css';




const TeacherList: React.FC = () =>{
  const [ teachers, setTeachers ] = useState([]);

  const [ subject, setSubject ] = useState('');
  const [ week_day, setWeekDay ] = useState('');
  const [ time, setTime ] = useState('');


  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const res = await api.get('/classes', {
      params:{ 
      subject,
      week_day,
      time}
    })
  
    setTeachers(res.data)
  }
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os Proffys disponíveis.">
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Física', label: 'Física'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'História', label: 'História'},
              {value: 'Português', label: 'Português'},
              {value: 'Geografia', label: 'Geográfia'},
              {value: 'Química', label: 'Química'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ed. Fisica', label: 'Educação Física'},
            ]}
            />

          <Select 
            name="week_day" 
            label="Dia da Semana"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
              options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feita'},
              {value: '5', label: 'Sexta-feita'},
              {value: '6', label: 'Sábado'},
              ]}
          />
          <Input 
            type="time" 
            name="time" 
            label="Hora"
            value={time}
            onChange={e => { setTime(e.target.value) }} 
          />

          <button type="submit">
            Buscar
          </button>

        </form>
      </PageHeader>
      
      <main>
        {teachers.map((teacher: Teacher ) => {
          return <TeacherItem key={ teacher.id } teacher={teacher} />
        })}
        
      </main>
     
    </div>
  );
}

export default TeacherList;