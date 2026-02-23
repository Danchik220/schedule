export interface ScheduleItem {
  id: string;
  startTime: string; // HH:mm format
  endTime: string;   // HH:mm format
  title: string;
  description?: string;
  subtasks?: string[];
  image: string;
}

export const schedule: ScheduleItem[] = [
  {
    id: '1',
    startTime: '06:00',
    endTime: '07:00',
    title: 'Утренний ритуал',
    description: 'Подъем, вода, растяжка и медитация.',
    subtasks: ['Выпить воды', '10 мин медитации', 'Легкая разминка'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    startTime: '07:00',
    endTime: '08:00',
    title: 'Завтрак и чтение',
    description: 'Здоровый завтрак и чтение новостей или книги.',
    subtasks: ['Приготовить овсянку', 'Прочитать 20 страниц'],
    image: 'https://images.unsplash.com/photo-1533089862017-5614a957425c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    startTime: '08:00',
    endTime: '09:00',
    title: 'Дорога / Настройка',
    description: 'Поездка на работу или подготовка рабочего места.',
    subtasks: ['Проверить почту', 'Просмотреть цели на день'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    startTime: '09:00',
    endTime: '11:00',
    title: 'Глубокая работа 1',
    description: 'Фокус на самой важной задаче дня.',
    subtasks: ['Ревью кода', 'Реализация новой фичи'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: '5',
    startTime: '11:00',
    endTime: '11:15',
    title: 'Короткий перерыв',
    description: 'Отдохнуть от экрана.',
    subtasks: ['Пройтись', 'Взять кофе'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    startTime: '11:15',
    endTime: '13:00',
    title: 'Глубокая работа 2',
    description: 'Продолжение разработки проекта.',
    subtasks: ['Исправление багов', 'Обновление документации'],
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '7',
    startTime: '13:00',
    endTime: '14:00',
    title: 'Обед',
    description: 'Подкрепиться и отдохнуть.',
    subtasks: ['Пообедать', 'Послушать подкаст'],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '8',
    startTime: '14:00',
    endTime: '16:00',
    title: 'Встречи и обсуждения',
    description: 'Синхронизация с командой и обсуждение прогресса.',
    subtasks: ['Стендап команды', 'Ревью дизайна'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '9',
    startTime: '16:00',
    endTime: '17:30',
    title: 'Завершение и планирование',
    description: 'Завершение текущих задач и план на завтра.',
    subtasks: ['Разобрать входящие', 'Обновить Jira'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: '10',
    startTime: '17:30',
    endTime: '19:00',
    title: 'Тренировка',
    description: 'Физическая активность для ясности ума.',
    subtasks: ['Спортзал', 'Пробежка'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '11',
    startTime: '19:00',
    endTime: '20:00',
    title: 'Ужин',
    description: 'Приготовление и ужин.',
    subtasks: ['Готовить', 'Есть'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '12',
    startTime: '20:00',
    endTime: '22:00',
    title: 'Отдых / Обучение',
    description: 'Отдых или изучение нового.',
    subtasks: ['Посмотреть фильм', 'Онлайн-курс'],
    image: 'https://images.unsplash.com/photo-1517602532537-8532421925aa?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '13',
    startTime: '22:00',
    endTime: '06:00',
    title: 'Сон',
    description: 'Отдых и восстановление.',
    subtasks: ['Спать'],
    image: 'https://images.unsplash.com/photo-1511296192434-bb61d42611bd?q=80&w=2070&auto=format&fit=crop'
  }
];
