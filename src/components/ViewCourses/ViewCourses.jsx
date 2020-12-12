import React,{useState} from 'react';
import GridView from '../GridVeiw/GridView';
import ListView from '../ListView/ListView';

const ViewCourses = ({view, changeView, courses , visible, loadMore, addToSelectItem}) => {
    // console.log(courses)
    // const [visible, setVisible] = useState(6)
    // const loadMore = () => {
    //     setVisible(courses.length)
    // }
    const getView = () => {
        if(view === 'grid-view'){
            return <GridView showButton={true} addToSelectItem={addToSelectItem} courses={courses.slice(0,visible)}/>
        }
        else if(view ==='list-view'){
            return <ListView addToSelectItem={addToSelectItem} courses={courses.slice(0,visible)}/>
        }
    }
    return (
        <div>
            {
                getView()
            }
             <div className="text-center">
                   {
                       visible < courses.length && (<button onClick={loadMore} className="load-btn">Load More</button>)
                   }
                </div>
        </div>
    );
};

export default ViewCourses;