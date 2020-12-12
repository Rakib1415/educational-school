import React, {useState, useEffect} from 'react';
import CourseCategories from '../CourseCategory/CourseCategories';
import {coursesCategory} from '../../courses/index'
import './MainArea.css'
import CoursesContainer from '../CoursesContainer/CoursesContainer';
import fakeData from '../data/index'

const MainArea = ({handleSelectCourse}) => {
    const [category, setCategory] = useState(coursesCategory.all);
    const [courses, setCourses] = useState([]);
    const [totalCourse, setTotalCourse] = useState(0)
    const [visible, setVisible] = useState(6)
    const [view, setView] = useState('grid-view');
    const [select, setSelect] = useState('')
    const [searchCourses, setSearchCourses] = useState([]);
  
    
    useEffect(()=> {
        if(category === "All"){
            setCourses(fakeData)
            setTotalCourse(fakeData.length)
            setVisible(6)
        }else{
            const categoryCourses = fakeData.filter(course => course.category === category);
            setCourses(categoryCourses)
            setTotalCourse(categoryCourses.length)
            setVisible(6)
    
        }
        setSelect('')
        setSearchCourses([])
    },[category])

    useEffect(()=>{
        selectPerform();

    },[select])

    const addToSelectItem = (item) => {
        handleSelectCourse(item)
    }

    const changeCategory = item => {
        setCategory(item)
    }

    const loadMore = () => {
        if(category === "All"){
            setVisible(visible + 10)
        }else{
            setVisible(courses.length)
        }
    }
    

    const changeView = (view) => {
        setView(view)
        setVisible(6)
    }

    const selectChange = (value) => {
        setSelect(value)
    }

    const compare = (a,b)=> {
        if(a.price > b.price){
            return 1;
        }else if(a.price < b.price){
            return -1;
        }
        return 0;
    }

    const searchPerform = () => {
            return courses.sort(compare);
    }

    const selectPerform =()=>{
        if(select === "Sort by price (Low to High)"){
            const searchItems = searchPerform();
            setSearchCourses(searchItems)
         
        }
       else if(select === "Sort by price (High to Low)"){
            const searchItems = searchPerform().reverse();
            setSearchCourses(searchItems)
         
        }
        // setSelect('')
        setSearchCourses([])
    }
    // console.log(selectedCourse)
   
    return (
        <div className="container my-4">
            <h1 className="text-center my-4">Ours Featured Courses</h1>
            <hr/>
            <div className="row">
                <div className="col-4 category-area">
                    <CourseCategories totalCourse={totalCourse} category={category} changeCategory={changeCategory}/>
                </div>
                <div className="col-8">
                    <CoursesContainer
                     view={view} 
                     changeView={changeView} 
                     visible={visible} 
                     loadMore={loadMore} 
                     courses={searchCourses.length > 0 ? searchCourses : courses}
                     select={select}
                     selectChange={selectChange}
                     addToSelectItem={addToSelectItem}
                     />
                </div>
            </div>
            
        </div>
    );
};

export default MainArea;