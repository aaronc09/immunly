import module1 from './module1';
import module2 from './module2';
import module3 from './module3';
import module4 from './module4';
import module5 from './module5';
import { Module } from '../types';

export const MODULES: Module[] = [module1, module2, module3, module4, module5];

export const getModule = (id: string): Module | undefined =>
  MODULES.find(m => m.id === id);

export const getLesson = (moduleId: string, lessonId: string) => {
  const mod = getModule(moduleId);
  return mod?.lessons.find(l => l.id === lessonId);
};
