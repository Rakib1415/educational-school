import webDevelopment from './web.json'
import computerProgramming from './computerProgramming.json'
import higherSecondary from './higherSecondary.json'
import higherEducation from './higher.json'
import digital from './digital.json'
import softwareTools from './softwareTools.json'
import undergrad from './undergrad.json'

const fakeData = [...webDevelopment, ...computerProgramming, ...higherEducation, ...higherSecondary, ...digital, ...softwareTools, ...undergrad];
 const shuffle = a => {
     for(let i = a.length; i; i--){
         let j = Math.floor(Math.random()*i);
         [a[i-1], a[j]] = [a[j], a[i-1]];
     }
 }

 shuffle(fakeData);

export default fakeData;