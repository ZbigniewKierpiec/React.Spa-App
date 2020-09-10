import React from 'react';
import Article from '../Article'
const articles=[

{

id:1,
title:'What weird food combinations do you really enjoy?',
author:'Allen Atkinson',
text:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed, libero vero aut inventore, a fugiat laboriosam velit, cumque corrupti eius rem cum quibusdam possimus deserunt aliquam asperiores excepturi temporibus?  '

},
{

    id:2,
    title:'What social atigma does society need to get over?',
    author:' James Baker',
    text:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed, libero vero aut inventore, a fugiat laboriosam velit, cumque corrupti eius rem cum quibusdam possimus deserunt aliquam asperiores excepturi temporibus?  '
    
    },
    {

        id:3,
        title:'What food have never eaten but would really like to try?',
        author:'Harper Cole',
        text:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed, libero vero aut inventore, a fugiat laboriosam velit, cumque corrupti eius rem cum quibusdam possimus deserunt aliquam asperiores excepturi temporibus?  '
        
        },
]



const HomePage =()=>{

const artlist=articles.map(article=>(


<Article key={article.id} {...article}/>



))


return(


<div className='home'>

{artlist}


</div>


)



}

export default HomePage;